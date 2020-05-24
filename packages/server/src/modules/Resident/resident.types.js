const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    listResidents(name: String, apartmentId: ID, responsible: String, offset: Int, limit: Int): ResidentPagination
    getResident(id: ID!): Resident
  }

  extend type Mutation {
    createResident(resident: ResidentInput!): Resident!
    updateResident(resident: ResidentInput!, id: ID!): Resident
    deleteResident(id: ID!): Resident
  }

  input ResidentInput {
    name: String!
    birth: String!
    phone: String!
    cpf: String!
    email: String!
    apartment: String!
    responsible: String!
  }

  type ResidentPagination {
    residents: [Resident]
    totalResident: Int
  }

  type Resident {
    _id: ID
    name: String!
    birth: String!
    phone: String!
    cpf: String!
    email: String!
    apartment: ID!
    responsible: String!
    apartmentName: String!
  }
`;

module.exports = typeDefs;
