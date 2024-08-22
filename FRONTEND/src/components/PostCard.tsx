import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const PostCard = ({ post }: { post: any }) => (
  <Card>
    <h3>{post.user_name}</h3>
    <Image src={post.media_url} alt={post.content} />
    <p>{post.content}</p>
    <small>{new Date(post.created_at).toLocaleString()}</small>
  </Card>
);

export default PostCard;
