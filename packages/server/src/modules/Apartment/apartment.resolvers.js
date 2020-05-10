const Apartment = require('./apartmentSchema');

const resolvers = {
  Query: {
    getApartments: (parent, { name }) => {
      const query = {};
      if (name) query.name = new RegExp(name);

      return Apartment.find(query);
    },
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
