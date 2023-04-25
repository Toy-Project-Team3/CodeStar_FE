import React from 'react';
import * as S from '@/styles/modal';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormValues {
  id: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
}

function JoinForm({ setLogin }: { setLogin: (value: boolean) => void }) {
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
      <div className="join">
        <h3>회원가입</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form_id">
            <input
              type="text"
              placeholder="ID"
              {...register('id', { required: true, pattern: /^[a-zA-Z0-9_-]{4,20}$/ })}
            />
            <span>중복확인</span>
          </div>
          <input
            type="password"
            placeholder="PW"
            {...register('password', { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/ })}
          />
          <input type="password" placeholder="PW confirm" {...register('passwordConfirm', { required: true })} />
          <input type="text" placeholder="nickname" {...register('nickname', { required: true })} />
          <p className="error">
            {errors['id'] && errors['id'].type === 'required' && '아이디를 입력해주세요'}
            {errors['id'] &&
              errors['id'].type === 'pattern' &&
              '4~20자의 영문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'}
            {!errors['id'] && errors['password'] && errors['password'].type === 'required' && '비밀번호를 입력해주세요'}
            {!errors['id'] &&
              errors['password'] &&
              errors['password'].type === 'pattern' &&
              '8~16자 영문자, 숫자를 사용하세요'}
            {!errors['id'] && !errors['password'] && errors['passwordConfirm'] && '비밀번호 재확인를 입력해주세요'}
            {errors['nickname'] &&
              !errors['passwordConfirm'] &&
              !errors['password'] &&
              !errors['id'] &&
              '닉네임를 입력해주세요'}
          </p>
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
