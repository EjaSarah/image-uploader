import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { likePost, getCommentsByPostId, addComment } from '../../services/api';

// Styled components
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Backdrop)`
  .container {
    background: #fff;
    border-radius: 8px;
    width: 500px;
    height: 500px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding: 24px;

      p {
        font-size: 24px;
        font-weight: 600;
      }
    }

    .content {
      padding: 24px;
      display: grid;
      gap: 24px;

      input {
        width: 100%;
        height: 50px;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ccc;
      }

      textarea {
        width: 100%;
        height: 100px;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ccc;
      }

      .formArea {
        display: grid;
        gap: 24px;
      }

      .profilePicture {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: 3px solid #ff6f61;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        .userImage {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
  }
`;


const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes.count);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchedComments = await getCommentsByPostId(post._id);
        setComments(fetchedComments);
      } catch (error) {
        console.error('Failed to fetch comments', error);
      }
    };
    fetchComments();
  }, [post._id]);

  const handleLike = async () => {
    try {
      const updatedPost = await likePost(post._id, 'userId'); // Replace 'userId' with the actual user ID
      setLikes(updatedPost.likes.count);
    } catch (error) {
      console.error('Failed to like post', error);
    }
  };

  const handleAddComment = async () => {
    try {
      const commentData = { userName: 'John Doe', commentText: newComment }; // Replace with actual data
      const newAddedComment = await addComment(post._id, commentData);
      setComments([...comments, newAddedComment]);
      setNewComment('');
    } catch (error) {
      console.error('Failed to add comment', error);
    }
  };

  return (
    <Wrapper>
      <h3>{post.userName}</h3>
      <p>{post.postDescription}</p>
      <img src={post.postImage} alt="Post" />
      <div>
        <button onClick={handleLike}>Like ({likes})</button>
      </div>
      <div>
        <h4>Comments</h4>
        {comments.map((comment) => (
          <p key={comment._id}>{comment.commentText}</p>
        ))}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleAddComment}>Comment</button>
      </div>
    </Wrapper>
  );
};

export default Post;
