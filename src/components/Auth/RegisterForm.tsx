import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { RegisterRequestBody } from '@/types/Register';

interface FormValues extends RegisterRequestBody {
  passwordConfirm: string;
}

export interface RegisterFormProps {
  isSubmitting: boolean;
  onSubmit: (formData: FormValues) => void;
}

const RegisterForm = ({ isSubmitting, onSubmit }: RegisterFormProps) => {
  const {
    register: registerField,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const password = watch('password', '');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...registerField('email')} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" {...registerField('password')} />

      <label htmlFor="passwordConfirm">Confirm Password</label>
      <input
        type="password"
        id="passwordConfirm"
        {...registerField('passwordConfirm', {
          validate: (value) =>
            value === password || 'The passwords do not match',
        })}
      />
      {errors.passwordConfirm && (
        <span>{errors.passwordConfirm.message}</span>
      )}

      <label htmlFor="username">Username</label>
      <input type="text" id="username" {...registerField('username')} />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting' : 'Submit'}
      </button>
    </form>
  );
};

RegisterForm.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
