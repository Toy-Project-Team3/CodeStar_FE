import React, { useState } from 'react';
import * as S from '@/styles/modal';
import { instance } from '../../utils/axiosInstance';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

interface FormValues {
  userId: string;
  password: string;
  passwordConfirm: string;
  userName: string;
}

function JoinForm({ setLogin }: { setLogin: (value: boolean) => void }) {
  const [message, setMessage] = useState<string>('');

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const password = watch('password');

  const { mutate, isLoading, error } = useMutation(
    (data: Omit<FormValues, 'passwordConfirm'>) => instance.post('/auth/register', data),
    {
      onSuccess: () => setLogin(true),
      onError: (error: any) => setMessage(error.response.data.message),
    },
  );

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { passwordConfirm, ...rest } = data;
    mutate(rest);
  };

  return (
    <>
      <div className="join">
        <h3>회원가입</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="ID"
            {...register('userId', {
              required: { value: true, message: '아이디를 입력해주세요' },
              pattern: { value: /^[a-zA-Z0-9]{4,16}$/, message: '4~20자의 영문자, 숫자만 사용 가능합니다.' },
            })}
          />
          <input
            type="password"
            placeholder="PW"
            {...register('password', {
              required: { value: true, message: '비밀번호를 입력해주세요' },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
                message: '8~16자 영문자, 숫자를 사용하세요',
              },
            })}
          />
          <input
            type="password"
            placeholder="PW confirm"
            {...register('passwordConfirm', {
              required: { value: true, message: '비밀번호를 다시 확인해주세요' },
              validate: (value) => value === password || '비밀번호가 일치하지 않습니다.',
            })}
          />
          <input
            type="text"
            placeholder="userName"
            {...register('userName', {
              required: { value: true, message: '닉네임를 입력해주세요' },
              pattern: {
                value: /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣._-]{1,20}$/,
                message: '한영문자, 숫자, 특수기호(_),(-)만 사용 가능합니다.',
              },
            })}
          />
          <p className="error">
            {errors['userId']?.message}
            {!errors['userId'] && errors['password']?.message}
            {!errors['userId'] && !errors['password'] && errors['passwordConfirm'] && errors.passwordConfirm.message}
            {!errors['userId'] && !errors['password'] && !errors['passwordConfirm'] && errors['userName']?.message}
          </p>
          {message && <p className="error">{message}</p>}
          <button>회원가입</button>
        </form>
      </div>
      <p>
        계정이 이미 있으신가요? <span onClick={() => setLogin(true)}>로그인</span>
      </p>
    </>
  );
}

export default JoinForm;
