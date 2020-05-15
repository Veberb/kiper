const Resident = require('./resident.schema');

const resolvers = {
  Query: {
    listResidents: (parent, { name, apartmentId }) => {
      const query = {};
      if (name) query.name = new RegExp(name);
      if (apartmentId) query.apartment = apartmentId;

      return Resident.find(query).populate('apartment');
    },
  },
};

module.exports = resolvers;
