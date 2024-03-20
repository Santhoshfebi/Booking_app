import React from "react";

const Offers = () => {
  return (
    <div>
      <div className="relative  p-6 flex">
        <input
          type="text"
          placeholder="Search for Offers by Name or Bank"
          className="w-80 border border-gray-300 focus:border-gray-300 focus:outline-none text-sm p-2 pl-5"
        />
        <i className="bi bi-search absolute text-gray-600 p-2 ml-72"></i>
      </div>
      <div>
        <h1 className="text-gray-600 text-lg">
          F I L T E R &nbsp; O F F E R S &nbsp; B Y
        </h1>
      </div>
      <div className="flex items-center justify-center pt-3 gap-3">
        <div className="w-20 border-none border-black flex flex-col items-center justify-center rounded-lg transition-colors group hover:cursor-pointer">
          <div className="w-20 h-20 p-5 border border-gray-100 rounded-lg group transition-colors duration-300 group-hover:bg-red-400 hover:text-white">
            <i className="bi bi-credit-card-2-front text-4xl text-gray-500 transition-colors duration-300 group-hover:text-white"></i>
          </div>
          <span className="text-sm mt-3 text-gray-500 transition-colors duration-300  group-hover:text-red-400">
            Credit Card
          </span>
        </div>

        <div className="w-20 border-none border-black flex flex-col items-center justify-center rounded-lg transition-colors group
        hover:cursor-pointer">
          <div className="w-20 h-20 p-5 border border-gray-100 rounded-lg group transition-colors duration-300 group-hover:bg-red-400 hover:text-white">
            <i className="bi bi-credit-card-2-front text-4xl text-gray-500 transition-colors duration-300 group-hover:text-white"></i>
          </div>
          <span className="text-sm mt-3 text-gray-500 transition-colors duration-300 group-hover:text-red-400">
            Debit Card
          </span>
        </div>

        <div className="w-20 border-none border-black flex flex-col items-center justify-center rounded-lg transition-colors group hover:cursor-pointer">
          <div className="w-20 h-20 p-5 border border-gray-100 rounded-lg group transition-colors duration-300 group-hover:bg-red-400 hover:text-white">
            <i className="bi bi-credit-card-2-front text-4xl text-gray-500 transition-colors duration-300 group-hover:text-white"></i>
          </div>
          <span className="text-sm mt-3 text-gray-500 transition-colors duration-300 group-hover:text-red-400">
            BookMyShow
          </span>
        </div>

        <div className="w-20 border-none border-black flex flex-col items-center justify-center rounded-lg transition-colors group hover:cursor-pointer">
          <div className="w-20 h-20 p-5 border border-gray-100 rounded-lg group transition-colors duration-300 group-hover:bg-red-400 hover:text-white">
            <i className="fi fi-ts-wallet text-4xl text-gray-500 transition-colors duration-300 group-hover:text-white"></i>
          </div>
          <span className="text-sm mt-3 text-gray-500 transition-colors duration-300 group-hover:text-red-400">
            Wallet
          </span>
        </div>

        <div className="w-20 border-none border-black flex flex-col items-center justify-center rounded-lg transition-colors group hover:cursor-pointer">
          <div className="w-20 h-20 p-5 border border-gray-100 rounded-lg group transition-colors duration-300 group-hover:bg-red-400 hover:text-white">
            <i className="bi bi-award text-4xl text-gray-500 transition-colors duration-300 group-hover:text-white"></i>
          </div>
          <span className="text-sm mt-3 text-gray-500 transition-colors duration-300 group-hover:text-red-400">
            Rewards
          </span>
        </div>

        <div className="w-20 border-none border-black flex flex-col items-center justify-center rounded-lg transition-colors group hover:cursor-pointer">
          <div className="w-20 h-20 p-5 border border-gray-100 rounded-lg group transition-colors duration-300 group-hover:bg-red-400 hover:text-white">
            <i className="bi bi-credit-card-2-front text-4xl text-gray-500 transition-colors duration-300 group-hover:text-white"></i>
          </div>
          <span className="text-sm mt-3 text-gray-500 transition-colors duration-300 group-hover:text-red-400">
            Pay Later
          </span>
        </div>
      </div>
    </div>
  );
};

export default Offers;
