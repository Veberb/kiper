const Apartment = require('./apartmentSchema');
const { authenticated } = require('../Auth');

const resolvers = {
  Query: {
    listApartments: authenticated(async (parent, { name, offset, limit }) => {
      const query = {};
      if (name) query.name = new RegExp(name);

      const [apartments, totalApartment] = await Promise.all([
        Apartment.find(query)
          .skip((offset - 1) * limit)
          .limit(limit),
        Apartment.countDocuments(query),
      ]);

      return { apartments, totalApartment };
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
