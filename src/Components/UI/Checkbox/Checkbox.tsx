import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...restProps }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-red-600 border-gray-300 rounded"
        {...restProps}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
