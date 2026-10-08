const express = require('express');
const blogController = require('../controllers/blog');
const blog = require('../models/blog');
const router = express.Router();

router.get('/',async (req, res)=>{
    const blogs = await blog.find({}).populate('createdBy','fullName email').sort({ createdAt: -1 });
    res.render('home',{ user: req.user,blogs});
})

router.get('/signin', (req, res) => {
    res.render('signin');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get("/add-new-blog",(req, res)=>{
    res.render("new-blog",{ user: req.user});
});

module.exports = router;