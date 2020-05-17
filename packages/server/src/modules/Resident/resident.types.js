const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    listResidents(name: String, apartmentId: ID): [Resident]
    getResident(id: ID!): Resident
  }

  extend type Mutation {
    createResident(resident: ResidentInput!): Resident!
    updateResident(resident: ResidentInput!, id: ID!): Resident
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
    name: String!
    birth: String!
    phone: String!
    cpf: String!
    email: String!
    apartment: ID!
    responsible: Boolean!
  }
`;

module.exports = typeDefs;
