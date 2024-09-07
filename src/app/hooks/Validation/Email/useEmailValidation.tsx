import { useState, useEffect } from "react";

const useEmailValidation = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    validateEmail();
  }, [email]);

  const validateEmail = () => {
    if (!email) {
      setError("Email is required !!");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid Username or Email, Please try again!");
      // return false;
    } else {
      setError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return {
    email,
    error,
    handleChange,
    validateEmail,
  };
};

export default useEmailValidation;
