import React, { useState } from "react";
import axios from "axios";
import bmsLogo from "../Resources/bms-logo.png";
import loginBackground from "../Resources/login.webp";

export default function Registration() {
  const [formData, setFormData] = useState({
    fullname: "",
    emailid: "",
    password: "",
    confirmPassword: "", // Added confirmPassword field
    mobile_no: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/register",
        formData
      );
      setMessage(response.data); // Update message state with response from the server
    } catch (error) {
      console.error("Error registering user:", error);
      setMessage("An error occurred");
    }
  };
  return (
    <div className="flex items-center justify-center py-10 outline-none">
      <div className="h-[500px] w-[60%] flex rounded-lg overflow-hidden shadow-2xl justify-center items-center relative">
        <div className="h-full w-full relative">
          <img
            src={loginBackground}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <form
          className="bg-black bg-opacity-70 flex flex-col gap-6 absolute px-3 py-3 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="h-14 w-36 ml-24">
            <img src={bmsLogo} alt="" className="w-full h-full" />
          </div>
          <div className="cont flex gap-4 flex-col items-center text-black">
            <input
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="bg-gray-100 w-[80%] text-sm h-7 rounded-md p-4 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              name="emailid"
              value={formData.emailid}
              onChange={handleChange}
              required
              className="bg-gray-100 w-[80%] text-sm h-7 rounded-md p-4 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Set Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-gray-100 w-[80%] text-sm h-7 rounded-md p-4 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required // Added confirmPassword input
              className="bg-gray-100 w-[80%] text-sm h-7 rounded-md p-4 focus:outline-none"
            />
            <input
              type="number"
              placeholder="Mobile Number"
              name="mobile_no"
              value={formData.mobile_no}
              onChange={handleChange}
              required
              className="bg-gray-100 w-[80%] text-sm h-7 rounded-md p-4 focus:outline-none"
            />
            {message && <p style={{ color: "red" }}>{message}</p>}{" "}
            {/* Display message */}
            <div className="text-xs text-white">
              By signing up, you agree to our{" "}
              <span className="text-red-500 underline">Terms of use</span> and{" "}
              <span className="text-red-500 underline">Privacy Policy</span>.
            </div>
            <button
              type="submit"
              className="w-[90%] rounded-md bg-[#F84464] text-white text-sm h-8"
            >
              Sign Up
            </button>
            <div className="font-semibold text-sm pb-4 text-white">
              Already a member?{" "}
              <span className="text-red-500 italic underline">Login</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
