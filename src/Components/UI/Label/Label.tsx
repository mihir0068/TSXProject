import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}
const Label: React.FC<InputProps> = (props) => {
  return <label className={`${props.className}`}>{props.title}</label>;
};

export default Label;
