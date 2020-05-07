const { gql } = require('apollo-server');

const typeDefs = gql`
  type Mutation {
    createApartment(apartment: ApartmentInput!): Apartment!
  }

  type Query {
    getApartments: [Apartment]
  }

  input ApartmentInput {
    name: String!
    number: Int!
    block: String!
  }

  type Apartment {
    _id: ID
    name: String
    number: Int
    block: String
  }
`;

module.exports = typeDefs;
