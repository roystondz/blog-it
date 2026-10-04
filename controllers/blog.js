const Comment = require('../models/comment');
const Blog = require('../models/blog');


async function createBlog(req, res) {
    const { title, body } = req.body;
    console.log('Request body:', req.body);
    try {
        const newBlog = await Blog.create({
            title,
            body,
            coverImage: `/uploads/${req.file.filename}`,
            createdBy: req.user.id
        });
        return res.redirect(`/blog/${newBlog._id}`);
    }catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
    
}

async function getBlogById(req, res) {
    const { blogId } = req.params;
    console.log('Blog ID:', blogId);
    try {
        const blog = await Blog.findById(blogId).populate('createdBy', 'fullName email');
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        const comments = await Comment.find({blogId:blogId}).populate('createdBy', 'fullName email profileImage').sort({ createdAt: -1 });
        console.log('Blog:', blog, 'Comments:', comments);
        return res.render("blog", { user: req.user, blog, comments });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = {
    createBlog,
    getBlogById
};