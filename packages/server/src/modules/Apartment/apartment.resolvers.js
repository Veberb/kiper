const Apartment = require('./apartmentSchema');

const resolvers = {
  Query: {
    getApartments: () => [],
  },

  Mutation: {
    createApartment: (parent, { apartment }) => {
      return new Apartment(apartment).save();
    },
  },
};

module.exports = resolvers;
