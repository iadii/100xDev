const express = require('express');
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');
const { body, validationResult } = require('express-validator');

const router = express.Router();

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, 'secretkey');
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};


router.get('/', authMiddleware, async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.user.id });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


router.post('/', [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required')
], authMiddleware, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      userId: req.user.id
    });

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
