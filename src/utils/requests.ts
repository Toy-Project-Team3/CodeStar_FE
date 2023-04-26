import { instance } from '@/utils/axiosInstance';
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
