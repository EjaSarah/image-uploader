const mongoose = require("mongoose");

const { Schema } = mongoose;

const PostSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  postDescription: {
    type: String,
    required: true,
  },
  postImage: {
    type: String,
    required: true,
  },
  likes: {
    count: {
      type: Number,
      default: 0,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;



