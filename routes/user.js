const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.post('/signin', userController.userSignIn);
router.post('/signup', userController.userSignUp);
router.get('/signout', userController.userSignOut);


module.exports = router;