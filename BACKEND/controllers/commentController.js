const Comment = require('../model/commentModel');

// Add a comment to a post
exports.addComment = async (req, res) => {
  const { postId } = req.params;
  const { userName, commentText } = req.body;

  try {
    const newComment = new Comment({
      postId,
      userName,
      commentText,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};

// Fetch comments for a specific post
exports.getCommentsByPostId = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};
