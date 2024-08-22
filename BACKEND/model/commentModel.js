const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  commentText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
