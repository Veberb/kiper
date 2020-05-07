const { ApolloServer } = require('apollo-server');
require('./database');

const typeDefs = require('./typeDefs/typeDefs');
const resolvers = require('./resolvers/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  })
  .catch((err) => {
    console.log(err);
  });
