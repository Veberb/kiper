const Apartment = require('./apartmentSchema');

const resolvers = {
  Query: {
    getApartments: () => Apartment.find(),
  },

  Mutation: {
    createApartment: (parent, { apartment }) => {
      return new Apartment(apartment).save();
    },
    deleteApartment: (parent, { _id }) => {
      return Apartment.findOneAndDelete({ _id });
    },
  },
};

module.exports = resolvers;
