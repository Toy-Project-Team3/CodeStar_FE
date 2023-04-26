import { useState } from 'react';
import { useMutation } from 'react-query';
import { RegisterRequestBody, RegisterResponseBody } from '@/types/Register';
import { register } from '@/utils/register';
import RegisterForm, { RegisterFormProps } from '@/components/Auth/RegisterForm';

const RegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { mutate } = useMutation<RegisterResponseBody, Error, RegisterRequestBody>(register, {
    onSuccess: (data) => {
      alert('회원 가입이 완료되었습니다.');
    },
    onError: (error) => {
      // 회원가입 실패 처리
      setErrorMessage(error.message);
    },
  });

  const handleRegister = async (formData: RegisterRequestBody) => {
    const { email, password, username } = formData;

    // 빈 문자열이 있는 경우 처리
    if (email === '' || password === '' || username === '') {
      alert('입력하지 않은 항목이 있습니다.');
      return;
    }

    setIsSubmitting(true);
    await mutate(formData);
    setIsSubmitting(false);
  };

  const registerFormProps: RegisterFormProps = {
    isSubmitting: isSubmitting,
    onSubmit: handleRegister,
  };

  return (
    <div>
      <h1>회원가입 페이지</h1>
      {errorMessage && <div>{errorMessage}</div>}
      <RegisterForm {...registerFormProps} />
    </div>
  );
};

export default RegisterPage;
