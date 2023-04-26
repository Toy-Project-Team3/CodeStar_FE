import { RegisterRequestBody, RegisterResponseBody } from '@/types/Register';
import { instance } from './axiosInstance';

export const register = async (requestBody: RegisterRequestBody): Promise<RegisterResponseBody> => {
  const response = await instance.post('/auth/register', requestBody);
  return response.data;
};
