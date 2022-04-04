const MISSING_TITLE = {
  message: '"title" is required',
};

const MISSING_CONTENT = {
  message: '"content" is required',
};

const MISSING_CATEGORIES = {
  message: '"categoryIds" is required',
};

const validateTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(400).json(MISSING_TITLE);
  next();
};

const validateContent = (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(400).json(MISSING_CONTENT);
  next();
};

const validateCategoryId = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json(MISSING_CATEGORIES);
  next();
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategoryId,
};