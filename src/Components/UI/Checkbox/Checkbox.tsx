import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label,checked, ...restProps }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="form-checkbox border-gray-300 rounded"
        {...restProps}
        checked={checked}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
