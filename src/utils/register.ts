import { RegisterRequestBody, RegisterResponseBody } from '@/types/Register';
import axios from 'axios';

export const register = async (requestBody: RegisterRequestBody): Promise<RegisterResponseBody> => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  const response = await instance.post('/auth/register', requestBody);

  return response.data;
};
