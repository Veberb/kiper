const ApartmentResolver = require('../modules/Apartment/apartment.resolvers');
const ApartmentTypes = require('../modules/Apartment/apartment.types');

module.exports = {
  typeDefs: [ApartmentTypes],
  resolvers: [ApartmentResolver],
};
