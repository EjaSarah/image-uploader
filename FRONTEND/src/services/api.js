import axios from 'axios';

export const API_URL = 'http://localhost:4000/api';

export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${API_URL}/create-post`, postData);
    return response.data;
  } catch (error) {
    console.error('Failed to create post', error);
    throw error;
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/post/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch post', error);
    throw error;
  }
};

export const likePost = async (postId, userId) => {
  try {
    const response = await axios.post(`${API_URL}/like-post/${postId}`, { userId });
    return response.data;
  } catch (error) {
    console.error('Failed to like post', error);
    throw error;
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch posts', error);
    throw error;
  }
};

export const addComment = async (postId, commentData) => {
  try {
    const response = await axios.post(`${API_URL}/post/${postId}/comment`, commentData);
    return response.data;
  } catch (error) {
    console.error('Failed to add comment', error);
    throw error;
  }
};

export const getCommentsByPostId = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/post/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch comments', error);
    throw error;
  }
};
