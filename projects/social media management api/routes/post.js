const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate'); // Import the authentication middleware
const Post = require('../models/post'); // Import the Post model

// Create a new post (protected route)
router.post('/create', authenticate, async (req, res) => {
  try {
    // Get user ID from the authenticated request
    const userId = req.userData.userId;

    // Extract post content from the request body
    const { content } = req.body;

    // Create a new post
    const post = new Post({
      user: userId,
      content,
    });

    await post.save();

    res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a post' });
  }
});

module.exports = router;
