import axios from 'axios';
import { AxiosError } from 'axios';
import { getCookie } from './cookies';
const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 3000,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
  });
  instance.interceptors.request.use(
    (request) => {
      const token = getCookie();
      if (token) request.headers['Authorization'] = `Bearer ${token}`;
      return request;
    },
    (error: AxiosError) => {
      console.log(error);
      return Promise.reject(error);
    },
  );

  return instance;
};
export const instance = createInstance();
