import { instance } from '@/utils/axiosInstance';
import { PostInterface } from '@/types/RequestInterface';
import { User } from '@/types/User';

export const getPosts = async () => {
  const res = await instance.get<PostInterface[]>(`posts`);
  return res.data;
};

export const getUser = async () => {
  // const res = await instance.get<User>;
};
