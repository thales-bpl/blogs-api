const express = require('express');
const blogPostController = require('../controllers/blogPostController');
const validations = require('../middlewares/blogPostValidations');
const authenticator = require('../middlewares/authToken');

const router = express.Router();

router
  .get('/', authenticator.validateLogin, blogPostController.getAllBlogPosts)
  .post('/',
    authenticator.validateLogin,
    validations.validateContent,
    validations.validateTitle,
    validations.validateCategoryId,
    blogPostController.postBlogPost);

module.exports = router;