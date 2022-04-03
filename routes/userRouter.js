const express = require('express');
const userController = require('../controllers/userController');
const validations = require('../middlewares/validations');

const router = express.Router();

router
  .get('/', userController.getAllUsers)
  .post('/',
    validations.validateDisplayName,
    validations.validateEmail,
    validations.validatePassword,
    userController.postUser);

module.exports = router;