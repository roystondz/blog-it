const express = require('express');
const commentController = require('../controllers/comment');

const router = express.Router();

router.post("/:blogId",commentController.addNewComment);

module.exports = router;