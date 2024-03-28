import React from "react";
import logi from "../Resources/login.webp";
import bms from "../Resources/bms-logo.png";
export default function Login() {
  return (
    <div className="flex items-center justify-center  bg-[#F84464] py-10">
      <div className="h-[500px] w-[60%] flex rounded-lg overflow-hidden shadow-2xl">
        <div className="h-full w-full relative bg-black bg-opacity-100 blur-sm">
          <img src={logi} alt="" className="h-full w-full object-cover" />
        </div>
        {/* <div className="h- w-[80%]  absolute py-14 "> */}
        <div className="h- w-[27%] bg-black flex flex-col gap-6 bg-opacity-70 absolute mt-8 ml-56 rounded-lg">
          <div className="h-14 w-36 ml-24">
            <img src={bms} alt="" className="w-full h-full" />
          </div>
          <div className="cont flex gap-4 flex-col items-center ">
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-100 w-[80%] text-sm h-7 rounded-md p-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="bg-gray-100 w-[80%] text-sm h-7 rounded-md p-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Set Password"
              className="bg-gray-100 w-[80%] text-sm h-7 rounded-md p-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="bg-gray-100 w-[80%] text-sm h-7 rounded-md p-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="bg-gray-100 w-[80%] text-sm h-7 rounded-md p-4 focus:outline-none"
            />

            <div className="text-xs text-white">
              By signing up,you agree to our{" "}
              <a href="" className="text-red-500 underline">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="" className="text-red-500 underline">
                Privacy Policy
              </a>
              .
            </div>
            <button className="w-[90%] rounded-md bg-[#F84464] text-white text-sm h-8">
              Sign Up
            </button>
            <div className="font-semibold text-sm text-white pb-4">
              Already a member?{" "}
              <a href="" className="text-red-500 italic underline">
                Login
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
