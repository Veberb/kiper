const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Mutation {
    createApartment(apartment: ApartmentInput!): Apartment!
    deleteApartment(_id: ID!): Apartment
    updateApartment(apartment: ApartmentInput!, id: ID!): Apartment!
  }

  extend type Query {
    listApartments(name: String, offset: Int, limit: Int): ApartmentPagination
    getApartment(id: ID!): Apartment
  }

  input ApartmentInput {
    name: String!
    number: Int!
    block: String!
  }

  type ApartmentPagination {
    apartments: [Apartment]
    totalApartment: Int
  }

  type Apartment {
    _id: ID
    name: String
    number: Int
    block: String
  }
`;

module.exports = typeDefs;
