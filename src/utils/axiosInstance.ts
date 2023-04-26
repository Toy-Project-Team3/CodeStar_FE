import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { getCookie } from '../utils/cookies';
import { error } from 'console';

const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
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
