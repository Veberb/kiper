const Apartment = require('./apartmentSchema');

const resolvers = {
  Query: {
    getApartments: (parent, { name }) => {
      const query = {};
      if (name) query.name = new RegExp(name);

      return Apartment.find(query);
    },
    getApartment: (parent, { id }) => {
      return Apartment.findById(id);
    },
  },

  Mutation: {
    createApartment: (parent, { apartment }) => {
      return new Apartment(apartment).save();
    },
    updateApartment: (parent, { apartment, id }) => {
      return Apartment.findByIdAndUpdate(id, apartment);
    },
    deleteApartment: (parent, { _id }) => {
      return Apartment.findOneAndDelete({ _id });
    },
  },
};

module.exports = resolvers;
