import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const Button: React.FC<InputProps> = (props) => {
  const { title, className, type = "button", ...restProps } = props;

  return (
    <button
      type={type}
      className={`w-full text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-100 ${className}`}
      {...restProps}
    >
      {title}
    </button>
  );
};

export default Button;
