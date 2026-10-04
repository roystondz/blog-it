const express = require('express');
const blogController = require('../controllers/blog');
const multer  = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('./public/uploads/'))
    },
    filename: function (req, file, cb) {
        const filename = `${Date.now()}-${file.originalname}`;
      cb(null, filename)
    }
})
  
const upload = multer({ storage: storage })

router.get("/add-new-blog",(req, res)=>{
  res.render("new-blog",{ user: req.user});
});

router.post("/add-new-blog",upload.single("coverImage"),blogController.createBlog);
router.get("/:blogId",blogController.getBlogById);



module.exports = router;