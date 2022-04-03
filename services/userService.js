const { Users } = require('../models');

const postUser = async (displayName, email, password, image) => {
  const newUser = await Users.create(displayName, email, password, image);
  return newUser;
};

const getAllUsers = async () => {
  const allUsers = await Users.findAll();
  return allUsers;
};

module.exports = {
  postUser,
  getAllUsers,
};