const Resident = require('./resident.schema');
const Apartment = require('../Apartment/apartmentSchema');
const { authenticated } = require('../Auth');
const { uniqueResponsible } = require('./resident.validation');

const resolvers = {
  Query: {
    listResidents: authenticated((parent, { name, apartmentId, responsible }) => {
      const query = {};

      if (name) query.name = new RegExp(name);
      if (apartmentId) query.apartment = apartmentId;
      if (responsible) query.responsible = responsible;

      return Resident.find(query);
    }),
    getResident: authenticated((parent, { id }) => {
      return Resident.findById(id);
    }),
  },
  Mutation: {
    createResident: authenticated(async (parent, { resident }) => {
      await uniqueResponsible(resident);
      return new Resident(resident).save();
    }),
    updateResident: authenticated(async (parent, { resident, id }) => {
      await uniqueResponsible(resident, id);
      return Resident.findByIdAndUpdate(id, resident);
    }),
    deleteResident: authenticated(async (parent, { id }) => {
      return Resident.findByIdAndDelete(id);
    }),
  },
  Resident: {
    apartmentName: async ({ apartment }) => {
      const { name } = await Apartment.findById(apartment);
      return name;
    },
  },
};

module.exports = resolvers;
