import Post from "../model/postModel";
import Comment from "../model/commentModel";

// Create a new post
exports.createPost = async (req, res) => {
  const { userName, postDescription, postImage } = req.body;

  try {
    const newPost = new Post({
      userName,
      postDescription,
      postImage,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

// Fetch a single post with comments and like count
exports.getPostById = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const comments = await Comment.find({ postId });

    res.status(200).json({ post, comments });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch post data' });
  }
};

// Like a post
exports.likePost = async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.body;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    if (post.likes.users.includes(userId)) {
      return res.status(400).json({ error: 'User has already liked this post' });
    }

    post.likes.users.push(userId);
    post.likes.count = post.likes.users.length;

    await post.save();

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to like post' });
  }
};

// Fetch all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};
