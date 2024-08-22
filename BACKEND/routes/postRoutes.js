const express = require('express');
const {
  createPost,
  getPostById,
  likePost,
  getAllPosts,
} = require('../controllers/postController');
const {
  addComment,
  getCommentsByPostId,
} = require('../controllers/commentController');

const router = express.Router();

// Post routes
router.post('/create-post', createPost);
router.get('/post/:postId', getPostById);
router.post('/like-post/:postId', likePost);
router.get('/posts', getAllPosts);

// Comment routes
router.post('/post/:postId/comment', addComment);
router.get('/post/:postId/comments', getCommentsByPostId);

module.exports = router;
