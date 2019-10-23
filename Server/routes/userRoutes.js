const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const token = require('../token')
router.post('/registration', userController.SignUp);
router.post('/login', userController.login);
router.post('/forgot', userController.forgot);
router.post('/reset/:token', token.verifyToken, userController.reset);
router.get('/getUsers', userController.getUsers);
module.exports = router;
