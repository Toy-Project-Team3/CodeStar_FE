export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export const users: Omit<User, 'createdAt'>[] = []