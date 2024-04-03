import React from "react";

export default function SideMenu() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[26.5%] ">
        <div className="p-3">
          <div className="text-xl font-bold text-gray-700">Hey!</div>
        </div>
        <div className="p-3 flex border border-gray-200">
          <div className="flex  w-56">
            <div className="h-10 w-14 rounded-full">
              <img
                src="https://in.bmscdn.com/webin/movies/superstar/rewards_login.png"
                alt="rewards_login"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="flex items-center justify-center leading-tight text-sm px-3 text-gray-500">
              Unlock special offers & great benefits
            </div>
          </div>
          <button className="rounded-lg text-xs w-28 h-9 border border-[#F84464] text-[#F84464] font-semibold flex items-center justify-center">
            Login / Register
          </button>
        </div>
        <div className="flex p-3 hover:bg-gray-200 border border-gray-100">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
            <svg
              width="20"
              height="20"
              viewBox="1 0 22 22"
              className="fill-current text-gray-800"
            >
              <path
                fill-rule="evenodd"
                d="M13.977 5.094l.002.002-.005-.002v.001l-.021-.005.206.045A5.002 5.002 0 0 1 18 10v6.974L20 19h-2l-3.55-.001a2.5 2.5 0 1 1-4.9 0L7.027 19v.004h-3L6 17.003V10a5.002 5.002 0 0 1 4.048-4.91l-.049.01L10 4a2 2 0 1 1 4 0l.001 1.1-.008-.002-.035-.008.018.004zm-.563 13.905h-2.829a1.5 1.5 0 1 0 2.83 0zM13 6h-2a4 4 0 0 0-4 4v6.978L7.014 18H17v-8a4 4 0 0 0-4-4zm.983-.904l.003.001.007.001-.008-.001-.002-.001zm-.002 0h.002l-.005-.002.003.002zm-.28-.047l.112.017.018.002-.13-.019zm-3.388-.003l-.057.009.036-.005.02-.004zm.267-.029l-.172.018.148-.016.024-.002zm2.928.008l.082.01a5.014 5.014 0 0 0-.082-.01zm-2.803-.016l-.125.008h.015l.11-.008zm2.538-.003h.013l.05.003-.063-.003zM12 3a1 1 0 0 0-1 1v1h2V4a1 1 0 0 0-1-1z"
              />
            </svg>
          </div>
          <div className="ml-2 text-gray-800">Notifications</div>
          <div className="ml-auto flex items-center">
            <svg width="6" height="11" className="fill-current text-gray-700">
              <title>Right Arrow</title>
              <path d="M.627.958a.572.572 0 0 1 0-.747.447.447 0 0 1 .679 0l4.04 4.469a.569.569 0 0 1 0 .75L1.307 9.9a.447.447 0 0 1-.68 0 .572.572 0 0 1 0-.747l3.706-4.097L.627.958z" />
            </svg>
          </div>
        </div>
        <div className="flex p-3 border border-gray-100">
        <div className="flex items-center ml-1">
        <img src="https://assets-in.bmscdn.com/members/common/icons/purchasehistory.png" alt="purchasehistory" className="w-5 h-5 "/>
        </div>
        <div className="ml-4">
            <div className=" text-gray-800">Your Orders</div>
            <div className="text-gray-800 text-xs">View all your bookings & purchases</div>
        </div>
        <button className="ml-auto focus:outline-none" >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-gray-600" viewBox="0 0 24 24" >
            <path fill-rule="evenodd" d="M12 2a4 4 0 0 1 4 4v2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a4 4 0 0 1 4-4zm5 7H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1zm-5 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-11a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z"/>
        </svg>
    </button>
        </div>
        <div className="flex p-3 border border-gray-100">
        <div className="flex items-center ml-1">
        <img src="https://assets-in.bmscdn.com/members/common/icons/streamlibrary_2.png" alt="stream_library" className="w-5 h-5 "/>
        </div>
        <div className="ml-4">
            <div className=" text-gray-800">Stream Library</div>
            <div className="text-gray-800 text-xs">Rented & Purchased Movies</div>
        </div>
        <button className="ml-auto focus:outline-none" >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-gray-600" viewBox="0 0 24 24" >
            <path fill-rule="evenodd" d="M12 2a4 4 0 0 1 4 4v2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a4 4 0 0 1 4-4zm5 7H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1zm-5 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-11a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z"/>
        </svg>
    </button>
        </div>
        <div className="flex p-3 border border-gray-100">
        <div className="flex items-center ml-1">
        <img src="https://assets-in.bmscdn.com/members/common/icons/playcreditcard.png" alt="play_credit_card" className="w-5 h-5 "/>
        </div>
        <div className="ml-4">
            <div className=" text-gray-800">Play Credit Card</div>
            <div className="text-gray-800 text-xs">View your Play Credit Card details and offers</div>
        </div>
        <div className="ml-auto flex items-center">
            <svg width="6" height="11" className="fill-current text-gray-700">
              <title>Right Arrow</title>
              <path d="M.627.958a.572.572 0 0 1 0-.747.447.447 0 0 1 .679 0l4.04 4.469a.569.569 0 0 1 0 .75L1.307 9.9a.447.447 0 0 1-.68 0 .572.572 0 0 1 0-.747l3.706-4.097L.627.958z" />
            </svg>
          </div>
        </div>
        <div className="flex p-3 border border-gray-100">
        <div className="flex items-center ml-1">
        <img src="https://assets-in.bmscdn.com/members/common/icons/helpandsupport.png" alt="help_and_support" className="w-5 h-5 "/>
        </div>
        <div className="ml-4">
            <div className=" text-gray-800">Help & Support</div>
            <div className="text-gray-800 text-xs">View commonly asked queries and Chat</div>
        </div>
        <div className="ml-auto flex items-center">
            <svg width="6" height="11" className="fill-current text-gray-700">
              <title>Right Arrow</title>
              <path d="M.627.958a.572.572 0 0 1 0-.747.447.447 0 0 1 .679 0l4.04 4.469a.569.569 0 0 1 0 .75L1.307 9.9a.447.447 0 0 1-.68 0 .572.572 0 0 1 0-.747l3.706-4.097L.627.958z" />
            </svg>
          </div>
        </div>
        <div className="flex p-3 border border-gray-100">
        <div className="flex items-center ml-1">
        <img src="https://assets-in.bmscdn.com/members/common/icons/accountandsettings.png" alt="acc_and_setting" className="w-5 h-5 "/>
        </div>
        <div className="ml-4">
            <div className=" text-gray-800">Accounts & Settings</div>
            <div className="text-gray-800 text-xs">Location, Payments, Permissions & More</div>
        </div>
        <button className="ml-auto focus:outline-none" >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-gray-600" viewBox="0 0 24 24" >
            <path fill-rule="evenodd" d="M12 2a4 4 0 0 1 4 4v2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a4 4 0 0 1 4-4zm5 7H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1zm-5 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-11a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z"/>
        </svg>
    </button>
        </div>
        <div className="flex p-3 border border-gray-100">
        <div className="flex items-center ml-1">
        <img src="https://assets-in.bmscdn.com/members/common/icons/rewards_1.png" alt="rewards" className="w-5 h-5 "/>
        </div>
        <div className="ml-4">
            <div className=" text-gray-800">Rewards</div>
            <div className="text-gray-800 text-xs">View your rewards & unlock new ones</div>
        </div>
        <div className="ml-auto flex items-center">
            <svg width="6" height="11" className="fill-current text-gray-700">
              <title>Right Arrow</title>
              <path d="M.627.958a.572.572 0 0 1 0-.747.447.447 0 0 1 .679 0l4.04 4.469a.569.569 0 0 1 0 .75L1.307 9.9a.447.447 0 0 1-.68 0 .572.572 0 0 1 0-.747l3.706-4.097L.627.958z" />
            </svg>
          </div>
        </div>
        <div className="flex p-3 border border-gray-100">
        <div className="flex items-center ml-1">
        <img src="https://assets-in.bmscdn.com/members/common/icons/bookasmile.png" alt="book_asmile" className="w-5 h-5 "/>
        </div>
        <div className="ml-4">
            <div className=" text-gray-800">BookASmile</div>
        </div>
        <div className="ml-auto flex items-center">
            <svg width="6" height="11" className="fill-current text-gray-700">
              <title>Right Arrow</title>
              <path d="M.627.958a.572.572 0 0 1 0-.747.447.447 0 0 1 .679 0l4.04 4.469a.569.569 0 0 1 0 .75L1.307 9.9a.447.447 0 0 1-.68 0 .572.572 0 0 1 0-.747l3.706-4.097L.627.958z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
