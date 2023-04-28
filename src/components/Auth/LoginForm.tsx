import React from 'react';
import { useMutation } from 'react-query';
import { instance } from '../../utils/axiosInstance';
import { useForm, SubmitHandler } from 'react-hook-form';
import { setCookie } from '@/utils/cookies';
import { useRecoilState } from 'recoil';
import userState from '@/utils/atom';

interface FormValues {
  userId: string;
  password: string;
}

interface LoginFormProps {
  setLogin: (value: boolean) => void;
  setModalOpen: (value: boolean) => void;
  setToken: (token: boolean) => void;
}

function LoginForm({ setLogin, setModalOpen, setToken }: LoginFormProps) {
  const [user, setUser] = useRecoilState(userState);
  const { mutate, isLoading, error } = useMutation((data: FormValues) => instance.post('/auth/login', data), {
    onSuccess: (response) => {
      setLogin(true);
      setToken(response.data.accessToken);
      setCookie(response.data.accessToken, response.data.content, { path: '/', maxAge: 3600, sameSite: 'strict' });
      console.log(response.data);
      setUser(response.data.content);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(data);
  };

  return (
    <>
      <div className="login">
        <h3>로그인</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="ID" {...register('userId', { required: true })} />
          <input type="password" placeholder="PW" {...register('password', { required: true })} />
          <p className="error">
            {errors['userId'] && '아이디를 입력해주세요'}
            {errors['password'] && !errors['userId'] && '비밀번호를 입력해주세요'}
          </p>
          <button type="submit">로그인</button>
        </form>
      </div>
      <p>
        아직 회원이 아니신가요? <span onClick={() => setLogin(false)}>회원가입</span>
      </p>
    </>
  );
}

export default LoginForm;
