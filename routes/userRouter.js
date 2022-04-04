const express = require('express');
const userController = require('../controllers/userController');
const validations = require('../middlewares/userValidations');
const authenticator = require('../middlewares/authToken');

const router = express.Router();

router
  .get('/', authenticator.validateLogin, userController.getAllUsers)
  .post('/',
    validations.validateDisplayName,
    validations.validateEmail,
    validations.validatePassword,
    userController.postUser);

module.exports = router;