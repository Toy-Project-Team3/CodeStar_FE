import { Cookies } from 'react-cookie';
import { Cookie, CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

export const getCookie = () => {
  try {
    return cookies.get('accessToken');
  } catch (error) {
    console.error(error);
  }
};

export const setCookie = (token: string, option: CookieSetOptions) => {
  try {
    cookies.set('accessToken', token, option);
  } catch (error) {
    console.error(error);
  }
};

export const removeCookie = () => {
  try {
    cookies.remove('accessToken');
  } catch (error) {
    console.error(error);
  }
};
