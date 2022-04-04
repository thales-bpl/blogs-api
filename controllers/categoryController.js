const categoryService = require('../services/categoryService');

const INVALID_CATEGORY = {
  message: 'Some error has occurred',
};

const postCategory = async (req, res) => {
  try { 
    const { name } = req.body;
    const newCategory = await categoryService.postCategory({ name });
    return res.status(201).json(newCategory.dataValues);
  } catch (error) {
    return res.status(400).json(INVALID_CATEGORY);
  }
};

module.exports = {
  postCategory,
};