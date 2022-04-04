const blogPostService = require('../services/blogPostService');

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
};