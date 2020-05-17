const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    listResidents(name: String, apartmentId: ID): [Resident]
  }

  extend type Mutation {
    createResident(resident: ResidentInput!): Resident!
  }

  input ResidentInput {
    name: String!
    birth: String!
    phone: String!
    cpf: String!
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
