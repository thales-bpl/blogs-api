require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const MISSING_TOKEN = {
  message: 'Token not found',
};

const INVALID_TOKEN = {
  message: 'Expired or invalid token',
};

const validateLogin = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json(MISSING_TOKEN);

  try {
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  await Users.findOne({ where: { email: decodedToken.email } });
  } catch (error) {
    return res.status(401).json(INVALID_TOKEN);
  }

  next();
};

module.exports = {
  validateLogin,
};