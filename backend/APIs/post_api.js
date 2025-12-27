// post APIs for creating new posts
const express = require('express');
const router = express.Router();

// In-memory storage for posts (for demonstration purposes)
let posts = [];

// POST /posts - Create a new post
router.post('/posts', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    const newPost = {
        id: posts.length + 1,
        title,
        content,
        createdAt: new Date()
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});

module.exports = router;