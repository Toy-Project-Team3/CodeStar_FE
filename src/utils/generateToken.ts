import { User } from '@/types/User';
import jwt from 'jsonwebtoken';

const secret = 'secrt magic';
export const generateToken = (user: User): string => {
  return jwt.sign({ sub: user.id }, secret, { expiresIn: '1h' });
};
