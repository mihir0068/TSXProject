import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Label from "../UI/Label/Label";
import { useNavigate } from "react-router";
import Checkbox from "../UI/Checkbox/Checkbox";
import useEmailValidation from "../../app/hooks/Validation/Email/useEmailValidation";
import usePasswordValidation from "../../app/hooks/Validation/Password/usePasswordValidation";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const { email, error: emailError, handleChange: handleEmailChange } = useEmailValidation();
  const {
    password,
    error: passwordError,
    handleChange: handlePasswordChange,
    handleBlur,
    validatePassword,
  } = usePasswordValidation();
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  useEffect(() => {
    const isEmailValid = !emailError;
    const isPasswordValid = !passwordError;

    if (email && password && isEmailValid && isPasswordValid)
      setIsButtonEnabled(true);
    else setIsButtonEnabled(false);
  }, [email, password, emailError, passwordError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isEmailValid = !emailError;
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      navigate("/Admin-dashboard");
    }
  };

  return (
    <form className="mt-12" onSubmit={handleSubmit}>
      <div className="flex justify-center items-center mt-4">
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            placeholder="Username or Email"
            iconClass="bi-person-fill"
            onChange={handleEmailChange}
          />
          {emailError && (
            <span className="text-red-500 text-sm mt-1 ml-2">{emailError}</span>
          )}
          <div className="mt-4">
            <Input
              type="password"
              placeholder="Password"
              iconClass="bi-lock-fill"
              onChange={handlePasswordChange}
              onBlur={handleBlur}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1 ml-2">{passwordError}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-left items-center mt-4 ml-1">
        <div>
          <Checkbox
            type="checkbox"
            name="remember-me"
            id="remember-me"
            className="focus:text-red-700"
            label={""}
          />
        </div>
        <div>
          <Label title="Remember Me" className="pl-2 pt-4" />
        </div>
      </div>

      <Button
        title="Sign In"
        className={`mt-7 ${
          isButtonEnabled
            ? "bg-red-600"
            : "disabled:bg-[#939393] cursor-no-drop"
        } text-white`}
        type="submit"
        disabled={!isButtonEnabled}
      />
    </form>
  );
};

export default Form;
