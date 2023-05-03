const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//POST signup
router.post('/signup', authController.createUser);
//POST login
router.post('/login', authController.login);
//POST logout
router.post('/logout', authController.logout);
//GET Auth status / verify
router.get('/verify', authController.verifyToken);
//GET User
router.get('/user/:id', authController.verifyTokenAdminInternal, authController.getUserById);
// Get All users
router.get('/users',authController.verifyTokenAdminInternal, authController.getAllUsers);
module.exports = router;