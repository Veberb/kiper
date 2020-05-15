const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    listResidents(name: String, apartmentId: ID): [Resident]
  }

  input ResidentInput {
    name: String!
    birth: Int!
    phone: String!
    cpf: Int
    email: String!
    apartment: ID!
    responsible: Boolean!
  }

  type Resident {
    _id: ID
    name: String
  }
`;

module.exports = typeDefs;
