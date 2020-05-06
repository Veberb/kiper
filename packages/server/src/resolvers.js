const resolvers = {
  Query: {
    sayHello: () => {
      console.log('teste');
      return 'hello random person';
    },
  },
};

module.exports = resolvers;
