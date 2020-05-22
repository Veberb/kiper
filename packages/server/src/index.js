const { ApolloServer } = require('apollo-server-express');
const { verifyToken } = require('./modules/Auth');
const express = require('express');
const app = express();

require('./database');
const { typeDefs, resolvers } = require('./graphql');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers['kiper-token'] || '';
    if (token) verifyToken({ req, token });
    return { authUser: req.authUser };
  },
});

server.applyMiddleware({ app });

app.listen(4000);

module.exports = app;
