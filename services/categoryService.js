const { Categories } = require('../models');

const getAllCategories = async () => {
  const allCategories = await Categories.findAll();
  return allCategories;
};

const postCategory = async (name) => {
  const newCategory = await Categories.create(name);
  return newCategory;
};

module.exports = {
  postCategory,
  getAllCategories,
};