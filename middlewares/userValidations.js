const RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}/; // crédito: Theo Lima

const SHORT_NAME = {
  message: '"displayName" length must be at least 8 characters long',
};

const MISSING_EMAIL = {
  message: '"email" is required',
};

const INVALID_EMAIL = {
  message: '"email" must be a valid email',
};

const MISSING_PASSWORD = {
  message: '"password" is required',
};

const SHORT_PASSWORD = {
  message: '"password" length must be 6 characters long',
};

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) return res.status(400).json(SHORT_NAME);
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json(MISSING_EMAIL);
  if (!RegExp.test(email)) return res.status(400).json(INVALID_EMAIL);
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json(MISSING_PASSWORD);
  if (password.length !== 6) return res.status(400).json(SHORT_PASSWORD);
  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};