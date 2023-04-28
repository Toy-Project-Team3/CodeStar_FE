import { User, users } from '@/types/User';
import { v4 as uuid } from 'uuid';

const id = uuid();
export const createUser = (id: string, userId: string, username: string): User => {
  const user = {
    id,
    userId,
    username,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  users.push(user);
  return user;
};
