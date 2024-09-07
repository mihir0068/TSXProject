import React from "react";

interface CardProps {
  iconClass?: string;
  className?: string;
  title?: string;
  value?: number;
  percentage?: string;
  isPositive?: boolean;
  period?: string;
}

const Cards: React.FC<CardProps> = ({
  iconClass,
  className,
  title,
  value,
  percentage,
  isPositive = true,
  period,
}) => {
  return (
    <div className="bg-white shadow p-4 h-[134px] w-[250px] rounded-[10px] border-[0.5px] border-pageLightGray mb-4 lg:mb-0 rounded-tl-[10px] opacity-100">
      <i className={`${iconClass} font-bold bg-opacity-35 p-1 rounded`}></i>
      <span className="ml-2">{title}</span>
      <div className="flex flex-row items-center mt-3 font-bold">
        <div className="text-xl">{value}</div>
        <div
          className={`font-thin ml-2 pl-2 pr-2 rounded-md text-sm ${className} ${
            isPositive
              ? "text-pageGreen bg-pageGreenShadow"
              : "text-pageRed bg-pageRedShadow border border-pageRed"
          }`}
        >
          {percentage}
        </div>
      </div>
      <span className="font-thin">
        <sub>{period}</sub>
      </span>
    </div>
  );
};

export default Cards;
