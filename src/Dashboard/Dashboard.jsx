import React from "react";
import dashlogo from "../Resources/bms-logo.png";

const Dashboard = () => {
  return (
    <div>
      <div className="dashnav w-screen h-24  border-lime-950 flex overflow-hidden sticky top-0">
        <div className="dashnavlogo w-1/4 h-28  border-red-950 bg-white ">
          <img className="h-24" src={dashlogo} alt="logo" />
        </div>
        <div className="dashnavcont w-3/4 h-24  border-green-950 flex">
          <div className="navcontleft w-3/5 h-24 bg-slate-300 flex items-center">
            <div className="wel ">
              <h1>BookMyShow Dashboard</h1>
            </div>
          </div>
          <div className="navcontright w-2/5 h-24 bg-slate-100 flex">
            <div className="control w-2/5 h-24  border-l-pink-950"></div>
            <div className="control w-4/12 h-24  border-grey-400"></div>
            <div className="control w-4/12 h-24  border-blue-800"></div>
          </div>
        </div>
      </div>
      <div className="maincointainer w-screen h-screen flex  border-l-fuchsia-950">
        <div className="sidenav w-1/4 h-screen  border-lime-600">
          <div className="control w-full h-24  border-blue-800 flex items-center justify-center">
            <button className="  h-10 w-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              Movies
            </button>
          </div>
          <div className="control w-full h-24  border-grey-400 flex items-center justify-center">
            <button className=" bg-slate-500">Cards</button>
          </div>
          <div className="control w-full h-24  border-blue-800 flex items-center justify-center">
            <button className=" bg-slate-500">Offers</button>
          </div>
          <div className="control w-full h-24  border-blue-800"></div>
          <div className="control w-full h-24  border-grey-400"></div>
          <div className="control w-full h-24  border-blue-800"></div>
        </div>
        <div className="maincontent w-3/4 h-screen  border-yellow-600"></div>
      </div>
    </div>
  );
};

export default Dashboard;
