const express = require('express');
const categoryController = require('../controllers/categoryController');
const validations = require('../middlewares/categoryValidations');
const authenticator = require('../middlewares/authToken');

const router = express.Router();

router
  .get('/', authenticator.validateLogin, categoryController.getAllCategories)
  .post('/',
    authenticator.validateLogin,
    validations.validateName,
    categoryController.postCategory);

module.exports = router;