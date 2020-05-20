const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server');

const verifyToken = ({ req, token }) => {
  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    req.authUser = decoded;
  });
};

const authenticated = (next) => (root, args, context, info) => {
  if (!context.authUser) {
    throw new AuthenticationError(`Oopa, favor fazer o login!`);
  }

  return next(root, args, context, info);
};

module.exports = { verifyToken, authenticated };
