const Resident = require('./resident.schema');

const resolvers = {
  Query: {
    listResidents: (parent, { name }) => {
      const query = {};
      console.log('chegou aqui?');
      if (name) query.name = new RegExp(name);

      return Resident.find(query);
    },
  },
};

module.exports = resolvers;
