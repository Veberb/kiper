const { UserInputError } = require('apollo-server');

const Resident = require('./resident.schema');

exports.uniqueResponsible = async ({ responsible, apartment }, id) => {
  const query = { responsible, apartment };

  if (id) query._id = { $ne: id };

  if (!responsible) return;

  const count = await Resident.countDocuments(query);
  if (count) throw new UserInputError('Já existe um responsável para esse apartamento', 409);
};
