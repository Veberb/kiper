const { gql } = require('apollo-server');

const ApartmentResolver = require('../modules/Apartment/apartment.resolvers');
const ApartmentTypes = require('../modules/Apartment/apartment.types');

const ResidentResolver = require('../modules/Resident/resident.resolvers');
const ResidentTypes = require('../modules/Resident/resident.types');

const UserResolver = require('../modules/User/user.resolvers');
const UserTypes = require('../modules/User/user.types');

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

module.exports = {
  typeDefs: [linkSchema, ApartmentTypes, ResidentTypes, UserTypes],
  resolvers: [ApartmentResolver, ResidentResolver, UserResolver],
};
