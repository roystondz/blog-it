const Comment = require('../models/comment');

async function addNewComment(req, res) {
    const { blogId } = req.params;
    
    const { content } = req.body;

    console.log('Request body:', req.body, 'Blog ID:', blogId, 'User ID:', req.user.id);

    try {
        const newComment = await Comment.create({
            content,
            blogId,
            createdBy: req.user.id
        });
        return res.redirect(`/blog/${blogId}`);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = {
    addNewComment
}; 