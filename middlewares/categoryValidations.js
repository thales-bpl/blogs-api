const MISSING_NAME = {
  message: '"name" is required',
};

const validateName = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json(MISSING_NAME);

  next();
};

module.exports = {
  validateName,
};