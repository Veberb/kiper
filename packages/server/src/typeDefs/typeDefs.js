const { gql } = require('apollo-server');

const typeDefs = gql`
  type Mutation {
    createApartment(name: String, number: Int, block: String): Apartment!
  }

  type Query {
    getApartments: [Apartment]
  }

  type Apartment {
    name: String
    number: Int
    block: String
  }
`;

module.exports = typeDefs;
