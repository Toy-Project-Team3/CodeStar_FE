import { instance } from '@/utils/axiosInstance';
import { PostInterface } from '@/types/RequestInterface';

export const getPosts = async () => {
  const res = await instance.get<PostInterface[]>(`posts`);
  return res.data;
};
