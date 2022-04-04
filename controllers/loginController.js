require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await Users.findOne({ where: { email } });
    if (!checkUser || checkUser.dataValues.password !== password) throw new Error();
    const token = jwt.sign(req.body, process.env.JWT_SECRET, jwtConfig);
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
};

module.exports = {
  postLogin,
};