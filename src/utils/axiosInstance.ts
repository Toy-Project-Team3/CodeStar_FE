import axios from 'axios';

const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};
export const instance = createInstance();
