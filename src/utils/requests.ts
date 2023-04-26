import { instance } from '@/utils/axiosInstance';
import { PostInterface } from '@/types/RequestInterface';

export const getPosts = async () => {
  const res = await instance.get<PostInterface[]>(`posts`);
  return res.data;
};

export const createPost = async (post) => {
  const response = await instance.post('posts', post);
  return response.data;
};
