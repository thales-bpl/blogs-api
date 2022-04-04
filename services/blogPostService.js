const { BlogPosts, Categories, Users } = require('../models');

const getAllBlogPosts = async () => {
  const allPosts = await BlogPosts.findAll({
    include: [
      { model: Users,
        attributes: {
        exclude: ['password'],
        },
        as: 'user',
      },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ] });

  return allPosts;
};

const getBlogPostsById = async (id) => {
  const postById = await BlogPosts.findByPk(id, { 
    include: [
      { model: Users,
        attributes: {
        exclude: ['password'],
        },
        as: 'user',
      },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ] });

  if (!postById) throw new Error();

  return postById;
};

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
  getAllBlogPosts,
  getBlogPostsById,
};