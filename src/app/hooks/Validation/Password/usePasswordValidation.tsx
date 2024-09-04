import { useState, useEffect } from 'react';

const usePasswordValidation = () => {
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);

  useEffect(() => {
    if (touched) {
      validatePassword();
    }
  }, [password, touched]);

  const validatePassword = () => {
    if (!password) {
      setError('Password is required');
      return false;
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    } else if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
      setError('Password must contain both letters and numbers');
      return false;
    } else {
      setError('');
      return true;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (touched) {
      validatePassword();
    }
  };

  const handleBlur = () => {
    setTouched(true);
    validatePassword();
  };

  return {
    password,
    error,
    handleChange,
    handleBlur,
    validatePassword,
  };
};

export default usePasswordValidation;
