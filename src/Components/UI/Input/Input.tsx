import React from "react";
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
  return (
    <label className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-red-200">
      <span className="pl-3">
        <i className={`bi ${iconClass} text-gray-500`}></i>
      </span>
      <input
        type={type}
        
        className={`pl-3 py-2 w-full border-none focus:ring-0 outline-none ${className}`}
        {...restProps}
      />
    </label>
  );
};

export default Input;
