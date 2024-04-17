import React, { useState } from "react";
import axios from "axios";
import loggg from "../Resources/bms-logo.png";

const Userinfo = () => {
  const [formData, setFormData] = useState({
    username: "",
    usermailid: "",
    userpassword: "",
    usermobilenum: "",
    userrole: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/userinfo",
        formData
      );
      console.log(response.data); // Log response from server
      // Clear form after successful submission if needed
      setFormData({
        username: "",
        usermailid: "",
        userpassword: "",
        usermobilenum: "",
        userrole: "",
      });
    } catch (error) {
      console.error("Error adding user:", error);
      // Handle error
    }
  };
  return (
    <div>
      <div className="dashnav w-screen h-24 bg-white flex overflow-hidden sticky top-0">
        <div className="dashnavlogo w-1/4 h-28   bg-white ">
          <img className="h-24" src={loggg} alt="logo" />
        </div>
        <div className="dashnavcont w-3/4 h-24  flex">
          <div className="navcontleft w-3/5 h-24  flex items-center">
            <div className="wel ">
              <h1>BookMyShow Dashboard</h1>
            </div>
          </div>
          <div className="navcontright w-2/5 h-24 flex justify-end">
            <div className="control flex items-center mr-3">
              <img
                src={loggg}
                alt=""
                className=" bg-black h-20 w-20 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="maincointainer w-screen h-screen flex">
        <div className="sidenav w-1/4 h-screen">
          <div className="control w-full h-24  flex items-center justify-center">
            <button className="  h-10 w-4/5 rounded-3xl hover:bg-gray-500 active:bg-gray-200 focus:outline-none focus:ring focus:ring-[#e7174b]">
              User
            </button>
          </div>
          <div className="control w-full h-24  flex items-center justify-center">
            <button className="  h-10 w-4/5 rounded-3xl hover:bg-gray-500 active:bg-gray-200 focus:outline-none focus:ring focus:ring-[#e7174b]">
              Movies
            </button>
          </div>
          <div className="control w-full h-24  border-grey-400 flex items-center justify-center">
            <button className=" h-10 w-4/5 rounded-3xl hover:bg-gray-500 active:bg-gray-200 focus:outline-none focus:ring focus:ring-[#e7174b]">
              Cards
            </button>
          </div>
          <div className="control w-full h-24 flex items-center justify-center">
            <button className=" h-10 w-4/5 rounded-3xl hover:bg-gray-500 active:bg-gray-200 focus:outline-none focus:ring focus:ring-[#e7174b] ">
              Offers
            </button>
          </div>
        </div>
        <div className="maincontent w-3/4 h-screen bg-slate-400">
          <div className="cot ml-3 mr-3 mt-3 mb-3 h-fit">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  User Name :
                </label>
                <input
                  type="text"
                  id="userName"
                  name="username"
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email Id :
                </label>
                <input
                  type="text"
                  id="usermailid"
                  name="usermailid"
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password :
                </label>
                <input
                  type="password"
                  id="userpassword"
                  name="userpassword"
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Mobile No :
                </label>
                <input
                  type="number"
                  id="usermobilenum"
                  name="usermobilenum"
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Role :
                </label>
                <input
                  type="text"
                  id="userrole"
                  name="userrole"
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>

              <div className="mt-4 flex gap-4">
                <button
                  type="submit"
                  className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Submit
                </button>
                <button
                  type="update"
                  className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  type="delete"
                  className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
