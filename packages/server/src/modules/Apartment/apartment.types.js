const { gql } = require('apollo-server');

const typeDefs = gql`
  type Mutation {
    createApartment(apartment: ApartmentInput!): Apartment!
    deleteApartment(_id: ID!): Apartment
    updateApartment(apartment: ApartmentInput!, id: ID!): Apartment!
  }

  type Query {
    getApartments(name: String): [Apartment]
    getApartment(id: ID!): Apartment
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
