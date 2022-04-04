const blogPostService = require('../services/blogPostService');

const getAllBlogPosts = async (_req, res) => {
  try {
    const allPosts = await blogPostService.getAllBlogPosts();
    return res.status(200).json(allPosts);
  } catch (error) {
    return res.status(500).json();
  }
};

const postBlogPost = async (req, res) => {
  try {
    const { id } = req.user;
    const { title, content, categoryIds } = req.body;
    const newPost = await blogPostService.postBlogPost(id, title, content, categoryIds);
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
};

module.exports = {
  postBlogPost,
  getAllBlogPosts,
};