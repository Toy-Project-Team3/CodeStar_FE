import React from 'react';
import { instance } from '../../utils/axiosInstance';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from '@/styles/modal';

interface FormValues {
  userId: string;
  password: string;
}

interface LoginFormProps {
  setLogin: (value: boolean) => void;
  setModalOpen: (value: boolean) => void;
}

function LoginForm({ setLogin, setModalOpen }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await instance.post('/auth/login', data, {
        headers: { 'Content-Type': 'application/json' },
      });
      setModalOpen(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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
