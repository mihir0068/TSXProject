import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const UserIcon: React.FC<InputProps> = (props) => {
  const { className } = props;
  return (
    <span className="pl-3">
      <i className={`bi ${className} text-gray-500 z-10`}></i>
    </span>
  );
};

export default UserIcon;
