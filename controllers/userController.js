const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (err) {
    return res.status(500).end();
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
    console.log(error.message);
    return res.status(409).json({ message: 'User already registered' });
  }
};

module.exports = {
  postUser,
  getAllUsers,
};