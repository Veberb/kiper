const Apartment = require('../models/apartment');

const resolvers = {
  Query: {
    getApartments: () => [],
  },

  Mutation: {
    createApartment: (parent, args) => {
      return new Apartment(args).save();
    },
  },
};

module.exports = resolvers;
