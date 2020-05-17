const { UserInputError } = require('apollo-server');

const Resident = require('./resident.schema');

exports.uniqueResponsible = async ({ responsible, apartment }) => {
  if (!responsible) return;

  const count = await Resident.countDocuments({ responsible, apartment });
  if (count) throw new UserInputError('Já existe um responsável para esse apartamento', 409);
};
