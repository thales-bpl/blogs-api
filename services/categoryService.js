const { Categories } = require('../models');

const postCategory = async (name) => {
  const newCategory = await Categories.create(name);
  return newCategory;
};

module.exports = {
  postCategory,
};