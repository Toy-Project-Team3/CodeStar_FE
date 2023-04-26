import { User } from './User';

export type RegisterRequestBody = Omit<User, 'createdAt' | 'updatedAt'>;

export type RegisterResponseBody = {
  user: User;
  token: string;
};
