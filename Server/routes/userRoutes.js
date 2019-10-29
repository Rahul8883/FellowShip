const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const token = require('../token');
const chatController = require('../controller/chatController')
router.post('/registration', userController.SignUp);
router.post('/login', userController.login);
router.post('/forgot', userController.forgot);
router.post('/reset/:token', token.verifyToken, userController.reset);
router.get('/getUsers', userController.getUsers);
router.post('/addMsg', chatController.addMsg)
router.get('/getUsersMsg', chatController.getUsersMsg)
module.exports = router;