import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { getCookie } from '../utils/cookies';
import { error } from 'console';

const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 3000,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyYjZlMjI1LTU0ZTktNDE3Yi04NDYzLTZlOGVhYTkxMDNmYSIsInVzZXJJZCI6InRlc3QiLCJ1c2VyTmFtZSI6Iuq5gOyYgeydgCIsImlhdCI6MTY4MjUzMTY0NSwiZXhwIjoxNjgyNTM1MjQ1fQ.LKKHcbkGW7eZNxALUyhgm0DtWjf9rmZSmnHPKg468HA',
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
