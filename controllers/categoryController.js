const categoryService = require('../services/categoryService');

const INVALID_CATEGORY = {
  message: 'Some error has occurred',
};

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await categoryService.getAllCategories();
    return res.status(200).json(allCategories);
  } catch (error) {
    return res.status(500).end();
  }
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
  getAllCategories,
};