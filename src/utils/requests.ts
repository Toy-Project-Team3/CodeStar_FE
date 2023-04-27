import axios from 'axios';
import { instance, imgInstance } from '@/utils/axiosInstance';
import { PostInterface } from '@/types/RequestInterface';
export const getPosts = async () => {
  const res = await instance.get<PostInterface[]>(`posts`);
  return res.data;
};

export const getPost = async (userId: String, postId: String) => {
  const res = await instance.get<PostInterface>(`posts/${userId}/${postId}`);
  return res.data;
};

export const getblogPosts = async (userId: string) => {
  const res = await instance.get<PostInterface[]>(`posts/${userId}`);
  return res.data;
};

export const createPost = async (post) => {
  const response = await imgInstance.post('posts', post);
  return response.data;
};
export const postLikeDislike = async (userId: String, postId: String) => {
  const response = await instance.post(`posts/${userId}/${postId}/like`);
  return response.data;
};

export const postComment = async (userId: String, postId: String, post: string) => {
  const response = await instance.post(`posts/${userId}/${postId}/comments`, post);
  return response.data;
};
