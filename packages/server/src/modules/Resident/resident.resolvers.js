const Resident = require('./resident.schema');
const { uniqueResponsible } = require('./resident.validation');

const resolvers = {
  Query: {
    listResidents: (parent, { name, apartmentId }) => {
      const query = {};
      if (name) query.name = new RegExp(name);
      if (apartmentId) query.apartment = apartmentId;

      return Resident.find(query).populate('apartment');
    },
    getResident: (parent, { id }) => {
      return Resident.findById(id);
    },
  },
  Mutation: {
    createResident: async (parent, { resident }) => {
      await uniqueResponsible(redisent);
      return new Resident(resident).save();
    },
    updateResident: async (parent, { resident, id }) => {
      await uniqueResponsible(resident);
      return Resident.findByIdAndUpdate(id, resident);
    },
  },
};

module.exports = resolvers;
