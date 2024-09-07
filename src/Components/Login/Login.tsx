import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import logo from "../IMG/logo.png";
import Form from "../Form/Form";
const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-pageBG font-sans border-2">
        <div className="bg-white p-8 rounded-lg shadow-md w-[445px] border-pageGray border-[0.5px] max-w-sm">
          <div className="flex justify-center items-center">
            <div>
              <img src={logo} alt="" height={40} width={40} />
            </div>
            <div>
              <p className="font-[400px] text-[22.781px] text-pageRed text-center pl-2">
                Wellbe<span className="text-pageBlue">Sync</span>
              </p>
            </div>
          </div>
          <p className="font-[600px] text-DarkBlue font-Metropolis text-[20px] h-[20px] text-center mt-16">
            Welcome to WellbeSync!
          </p>
          <p className=" text-pageDarkBlue font-[600px] font-Metropolis text-center text-[16px] mt-2">
            Sign in to continue.{" "}
          </p>
          <Form></Form>
        </div>
      </div>
    </>
  );
};

export default Login;
