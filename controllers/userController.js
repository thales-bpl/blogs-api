const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (err) {
    return res.status(500).end();
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const userById = await userService.getUserById(id);
    if (!userById) throw new Error();

    return res.status(200).json(userById);
  } catch (error) {
    return res.status(404).json({ message: 'User does not exist' });
  }
};

const postUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const allUsers = await userService.getAllUsers();
    const invalidUser = allUsers.some((user) => user.email === email);
    if (invalidUser) throw new Error();

    const newUser = await userService.postUser({ displayName, email, password, image });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(409).json({ message: 'User already registered' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { user } = req;
    if (req.params.id === 'me') {
      console.log(req.params.id);
      await userService.deleteUser(user.id);
      return res.status(204).json();
    }
  } catch (error) {
    return res.status(404).json({ message: 'User not found' });
  }
};

module.exports = {
  postUser,
  getAllUsers,
  getUserById,
  deleteUser,
};