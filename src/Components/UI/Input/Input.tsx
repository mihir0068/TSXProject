import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconClass: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  className = "",
  iconClass,
  type,
  ...restProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <label className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-red-200">
      <span className="pl-3">
        <i className={`bi ${iconClass} text-gray-700`}></i>
      </span>
      <input
        type={showPassword && type === "password" ? "text" : type}
        className={`pl-3 border-none focus:ring-0 outline-none ${className}`}
        {...restProps}
      />
      {type === "password" && (
        <span
          onClick={togglePasswordVisibility}
          className="pr-3 cursor-pointer"
        >
          <i
            className={`bi ${
              showPassword ? "bi-eye" : "bi-eye-slash"
            } text-[#D4D4D4]`}
          ></i>
        </span>
      )}
    </label>
  );
};

export default Input;
