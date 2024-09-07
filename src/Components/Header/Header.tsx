import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../IMG/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/Login");
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center h-[70px] bg-pageBG">
        <div className="w-[246px] h-[70px] flex items-center justify-center border-r-[0.5px] border-b-[0.5px]  border-gray-400 border-dashed">
          <img src={logo} alt="" height={33} width={33} />{" "}
          <p className="text-pageRed font-bold text-[18.34px] pl-1">
            Wellbe<span className="text-gray-600">Sync</span>
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4 pr-4">
          <div className="relative inline-block mr-[10px] ">
            <i className="bi bi-bell-fill text-pageDarkGray w-[25px] h-[25px] cursor-pointer"></i>
            <sup className="absolute top-[-7px] right-[-6px] bg-pageRed text-white rounded text-xs px-[0.6px] py-[0.4px]">
              10
            </sup>
          </div>

          <div
            className="bg-pageDarkGray text-white text-[24px] w-[35px] h-[35px] flex justify-center items-center rounded-[20px] cursor-pointer"
            onClick={handleLogout}
          >
            D
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
