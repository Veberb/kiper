const { AuthenticationError, UserInputError } = require('apollo-server');
const jsonWebToken = require('jsonwebtoken');

const User = require('./user.schema');

const resolvers = {
  Mutation: {
    createUser: async (parent, { user }) => {
      const hashPassword = await User.hashPassword(user);
      return new User({ ...user, password: hashPassword }).save();
    },
    signIn: async (parent, { user }) => {
      const userFound = await User.find({ email: user.email });

      if (!userFound.length) throw new UserInputError('Usuário não encontrado :C ');
      const isValid = await userFound[0].checkPassword(user.password);

      if (!isValid) throw new AuthenticationError('Senha errada.');

      return jsonWebToken.sign({ userFound }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      });
    },
  },
};

module.exports = resolvers;
