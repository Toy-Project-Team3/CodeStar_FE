export type User = {
  id: string;
  username: string;
  userId: string;
  profileImg?: string;
  createdAt: string;
  updatedAt: string;
};

export const users: Omit<User, 'createdAt'>[] = [];
