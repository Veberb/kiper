const Resident = require('./resident.schema');
const { UserInputError } = require('apollo-server');

const resolvers = {
  Query: {
    listResidents: (parent, { name, apartmentId }) => {
      const query = {};
      if (name) query.name = new RegExp(name);
      if (apartmentId) query.apartment = apartmentId;

      return Resident.find(query).populate('apartment');
    },
  },
  Mutation: {
    createResident: (parent, { resident }) => {
      console.log('oi');
      //#TODO: Fazer validação se ja existe responsavel
      /*if (resident.responsible) {
        return new UserInputError('Já existe um responsavel cadastrado para esse apartamento', 409);
      }*/
      return new Resident(resident).save();
    },
  },
};

module.exports = resolvers;
