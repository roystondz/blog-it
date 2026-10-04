const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.post('/signin', userController.userSignIn);
router.post('/signup', userController.userSignUp);
router.get('/signout', userController.userSignOut);

router.get('/signin', (req, res) => {
    res.render('signin');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


module.exports = router;