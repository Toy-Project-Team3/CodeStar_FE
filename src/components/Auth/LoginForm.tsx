import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from '@/styles/modal';

interface FormValues {
  id: string;
  password: string;
}

function LoginForm({ setLogin }: { setLogin: (value: boolean) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="login">
        <h3>로그인</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="ID" {...register('id', { required: true })} />
          <input type="password" placeholder="PW" {...register('password', { required: true })} />
          <p className="error">
            {errors['id'] && '아이디를 입력해주세요'}
            {errors['password'] && !errors['id'] && '비밀번호를 입력해주세요'}
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
