const User = require('./user.schema');

const resolvers = {
  Mutation: {
    createUser: async (parent, { user }) => {
      const hashPassword = await User.hashPassword(user);
      return new User({ ...user, password: hashPassword }).save();
    },
  },
};

module.exports = resolvers;
