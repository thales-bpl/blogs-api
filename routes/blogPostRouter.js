const express = require('express');
const blogPostController = require('../controllers/blogPostController');
const validations = require('../middlewares/blogPostValidations');
const authenticator = require('../middlewares/authToken');

const router = express.Router();

router
  .get('/', authenticator.validateLogin, blogPostController.getAllBlogPosts)
  .get('/:id', authenticator.validateLogin, blogPostController.getBlogPostsById)
  .post('/',
    authenticator.validateLogin,
    validations.validateContent,
    validations.validateTitle,
    validations.validateCategoryId,
    blogPostController.postBlogPost)
  .put('/:id',
    authenticator.validateLogin,
    validations.validateTitle,
    validations.validateContent,
    blogPostController.putBlogPostById);

module.exports = router;