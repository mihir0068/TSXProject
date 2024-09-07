import React from "react";

interface TabsProps {
  iconClass?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  iconClass,
  label,
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`bg-opacity-50 rounded-lg cursor-pointer w-[196px] h-[44px] text-[14px] font-Poppins ${className}`}
      onClick={onClick}
    >
      <p className=" text-left pt-[11px] pl-[15px]">
        <i className={`${iconClass} font-bold h-[16.04px] w-[14px]`}></i>
        <span className="pl-2">{label}</span>
      </p>
    </div>
  );
};

export default Tabs;
