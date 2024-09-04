import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {useNavigate} from "react-router-dom";
import logo from "../IMG/logo.png";
import Form from "../Form/Form";
const Login = () => {

  
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#DDDDDD] font-arialCyrillic border-2">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <div className="flex justify-center items-center">
            <div>
              <img src={logo} alt="" height={70} width={70} />
            </div>
            <div>
              <p className="font-bold text-xl text-red-700 text-center">
                Wellbe<span className="text-[#25244f]">Sync</span>
              </p>
            </div>
          </div>
          <p className="font-bold text-[#153254] font-arialCyrillic text-xl  text-center mt-16">
            Welcome to WellbeSync!
          </p>
          <p className=" text-[#153254] font-arialCyrillic text-center mt-1">
            Sign in to continue.{" "}
          </p>
          <Form></Form>
        </div>
      </div>
    </>
  );
};

export default Login;
