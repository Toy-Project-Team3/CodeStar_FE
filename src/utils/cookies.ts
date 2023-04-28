import { User } from '@/types/User';
import { Cookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

export const getCookie = () => {
  try {
    return cookies.get('accessToken');
  } catch (error) {
    console.error(error);
  }
};
export const getUser = () => {
  try {
    return cookies.get('userData');
  } catch (error) {
    console.error(error);
  }
};

export const setCookie = (token: string, user: User, option: CookieSetOptions) => {
  try {
    cookies.set('accessToken', token, option);
    cookies.set('userData', user, option);
  } catch (error) {
    console.error(error);
  }
};

export const removeCookie = () => {
  try {
    cookies.remove('accessToken');
    cookies.remove('userData');
  } catch (error) {
    console.error(error);
  }
};
