const Apartment = require('../models/apartment');

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
