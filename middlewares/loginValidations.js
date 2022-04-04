const EMPTY_EMAIL = {
  message: '"email" is not allowed to be empty',
};

const MISSING_EMAIL = {
  message: '"email" is required',
};

const MISSING_PASSWORD = {
  message: '"password" is required',
};

const EMPTY_PASSWORD = {
  message: '"password" is not allowed to be empty',
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (email === '') return res.status(400).json(EMPTY_EMAIL);
  if (!email) return res.status(400).json(MISSING_EMAIL);
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password === '') return res.status(400).json(EMPTY_PASSWORD);
  if (!password) return res.status(400).json(MISSING_PASSWORD);
  next();
};

module.exports = {
  validateEmail,
  validatePassword,
};