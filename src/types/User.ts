import { PostInterface } from '@/types/RequestInterface';

export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

export const users: Omit<User, 'createdAt'>[] = [];

export type Username = User['username'];

export interface UserInfo extends User {
  profileImg: string;
  postList: PostInterface[];
  credits: {
    creditScore: number;
  };
  likes: any[];
}
