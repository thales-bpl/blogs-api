const { BlogPosts, Categories } = require('../models');

const postBlogPost = async (userId, title, content, categoryIds) => {
  const categoriesMap = categoryIds.map((category) => Categories.findByPk(category));
  const allCategories = await Promise.all(categoriesMap);

  if (!allCategories || allCategories === undefined) throw new Error();

  const newPost = await BlogPosts.create({ userId, title, content });

  await newPost.addCategories(allCategories);
  return newPost;
};

module.exports = {
  postBlogPost,
};