const Apartment = require('./apartmentSchema');
const { authenticated } = require('../Auth');

const resolvers = {
  Query: {
    listApartments: authenticated((parent, { name }) => {
      const query = {};
      if (name) query.name = new RegExp(name);

      return Apartment.find(query);
    }),
    getApartment: authenticated((parent, { id }) => {
      return Apartment.findById(id);
    }),
  },

  Mutation: {
    createApartment: authenticated((parent, { apartment }) => {
      return new Apartment(apartment).save();
    }),
    updateApartment: authenticated((parent, { apartment, id }) => {
      return Apartment.findByIdAndUpdate(id, apartment);
    }),
    deleteApartment: authenticated((parent, { _id }) => {
      return Apartment.findOneAndDelete({ _id });
    }),
  },
};

module.exports = resolvers;
