const { ApolloServer } = require('apollo-server');
const { verifyToken } = require('./modules/Auth');

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

server
  .listen()
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  })
  .catch((err) => {
    console.log(err);
  });
