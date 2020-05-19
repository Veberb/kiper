const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Mutation {
    createUser(user: UserInput!): User!
    signIn(user: UserInput!): String!
  }

  input UserInput {
    email: String!
    password: String!
  }

  type User {
    _id: ID
    email: String
    password: String
  }
`;

module.exports = typeDefs;
