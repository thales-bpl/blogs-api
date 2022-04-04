const express = require('express');
const loginController = require('../controllers/loginController');
const validations = require('../middlewares/loginValidations');

const router = express.Router();

router
  .post('/', validations.validateEmail, validations.validatePassword, loginController.postLogin);

module.exports = router;