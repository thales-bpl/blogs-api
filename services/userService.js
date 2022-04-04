const { Users } = require('../models');

const getAllUsers = async () => {
  const allUsers = await Users.findAll({ attributes: { exclude: ['password'] } });
  return allUsers;
};

const postUser = async (displayName, email, password, image) => {
  const newUser = await Users.create(displayName, email, password, image);
  return newUser;
};

const getUserById = async (id) => {
  const userById = await Users.findByPk(id, { attributes: { exclude: ['password'] } });
  return userById;
};

const deleteUser = async (id) => {
  await Users.destroy({ where: { id } });
};

module.exports = {
  postUser,
  getAllUsers,
  getUserById,
  deleteUser,
};