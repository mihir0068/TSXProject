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
      <div className="flex flex-col font-arialCyrillic bg-white p-1">
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center">
            <div>
              <img src={logo} alt="" height={70} width={70} />
            </div>
            <div>
              <p className="font-bold text-xl text-red-600 text-center">
                Wellbe<span className="text-[#4e4e59]">Sync</span>
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mr-4 cursor-pointer">
              <i className="bi bi-bell-fill text-[#4e4e59]"></i>
            </div>
            <div className="pr-2 cursor-pointer" onClick={handleLogout}>
              {" "}
              <i className="bi bi-box-arrow-left text-red-500 font-bold"></i>{" "}
              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
