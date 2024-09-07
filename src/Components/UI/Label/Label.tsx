import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  for: String;
  title: string;
}
const Label: React.FC<InputProps> = (props) => {
  return <label className={`${props.className}`} htmlFor={`${props.for}`}>{props.title}</label>;
};

export default Label;
