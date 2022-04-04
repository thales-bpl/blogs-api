const blogPostService = require('../services/blogPostService');

const getAllBlogPosts = async (_req, res) => {
  try {
    const allPosts = await blogPostService.getAllBlogPosts();
    return res.status(200).json(allPosts);
  } catch (error) {
    return res.status(500).json();
  }
};

const getBlogPostsById = async (req, res) => {
  try {
    const { id } = req.params;
    const postById = await blogPostService.getBlogPostsById(id);
    return res.status(200).json(postById);
  } catch (error) {
    return res.status(404).json({ message: 'Post does not exist' });
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

const putBlogPostById = async (req, res) => {
  try {
    const { user } = req;
    const { title, content } = req.body;
    const { id } = req.params;

    const postById = await blogPostService.getBlogPostsById(id);

    if (user.id !== postById.dataValues.user.id) {
      return res.status(401).json({ message: 'Unauthorized user' }); 
    }

    if (req.body.categoryIds) {
      return res.status(400).json({ message: 'Categories cannot be edited' });
    }

    const edittedPost = await blogPostService.putBlogPostById(id, title, content);
    return res.status(200).json(edittedPost);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  postBlogPost,
  getAllBlogPosts,
  getBlogPostsById,
  putBlogPostById,
};