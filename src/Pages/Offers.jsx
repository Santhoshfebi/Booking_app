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

        <div
          className="w-20 border-none border-black flex flex-col items-center justify-center rounded-lg transition-colors group
        hover:cursor-pointer"
        >
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
            <i className="fi fi-tr-wallet text-4xl text-gray-500 transition-colors duration-300 group-hover:text-white"></i>
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

      <div id="cards" className=" p-16 flex gap-4 bg-gray-100">
        <div id="card" className="relative rounded-lg shadow-2xl z-20">
          <div
            id="photo"
            className="relative rounded-t-lg overflow-hidden h-[270px]"
          >
            <img
              src="https://in.bmscdn.com/offers/offerlisting/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?07122023114930"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col  items-center pt-4 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="text-sm font-bold ">ABOUT OFFER</div>
              <hr class="w-full border-t border-gray-400 my-3"></hr>
              <div className="w-[180px] mt-6">
                <p className="text-xs">
                  Get 2 free movie tickets or INR 500 off whichever is less with
                  SBI Signature/Elite credit cards
                </p>
              </div>
              <div className="mt-[56px]">
                <div className="text-xs ">AVAILABLE FOR</div>
                <div class="flex mt-3 gap-3">
                  <div class="relative group">
                    <div class="border border-white text-xl text-white rounded-full h-8 w-8 flex items-center justify-center">
                      <i class="bi bi-laptop"></i>
                    </div>
                    <span class="absolute  text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300 top-full left-1/2 transform -translate-x-1/2 group-hover:opacity-100">
                      Web
                    </span>
                  </div>

                  <div class="relative group">
                    <div class="border border-white text-xl text-white rounded-full h-8 w-8 flex items-center justify-center">
                      <i class="bi bi-phone"></i>
                    </div>
                    <span class="absolute text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300 top-full left-1/2 transform -translate-x-1/2 group-hover:opacity-100">
                      Mobile
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="circle"
            className="absolute h-14 w-14 rounded-full overflow-hidden mt-[-28px] ml-4"
          >
            <img
              src="https://in.bmscdn.com/offers/tnclogo/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?07122023114930"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8">
            <div id="textbox" className="  ml-[-14px] ">
              <div
                id="text1"
                className="h-6 w-[183px] mt-2  line-clamp-1 overflow-hidden  text-sm"
              >
                SBI SIGNATURE/ELITE CREDIT CARD OFFER
              </div>
              <div id="text2" className="h-6 w-[183px]  mt-9 flex gap-1">
                <div className="text-xs text-start text-gray-500">
                  Valid till
                </div>
                <div className="text-xs">31 Mar 2026 23:59</div>
              </div>
            </div>
          </div>
        </div>
        <div id="card" className="relative rounded-lg shadow-2xl z-10 ">
          <div
            id="photo"
            className="relative rounded-t-lg overflow-hidden h-[270px]"
          >
            <img
              src="https://in.bmscdn.com/offers/offerlisting/rblmon1216.jpg?20112023151926"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            id="circle"
            className="absolute h-14 w-14 rounded-full overflow-hidden mt-[-28px] ml-4"
          >
            <img
              src="https://in.bmscdn.com/offers/tnclogo/rblmon1216.jpg?20112023151926"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8">
            <div id="textbox" className="  ml-[-10px] ">
              <div
                id="text1"
                className="h-6 w-[183px] mt-2 ml-[-14px] line-clamp-1 overflow-hidden  text-sm"
              >
                RBL Bank Popcorn, Fun+, Movies & More and Blockbuster card
                monthly offer
              </div>
              <div id="text2" className="h-6 w-[183px]  mt-9 flex gap-1">
                <div className="text-xs text-start text-gray-500">
                  Valid till
                </div>
                <div className="text-xs">31 Oct 2024 23:59</div>
              </div>
            </div>
          </div>
        </div>
        <div id="card" className="relative rounded-lg shadow-2xl">
          <div
            id="photo"
            className="relative rounded-t-lg overflow-hidden h-[270px]"
          >
            <img
              src="https://in.bmscdn.com/offers/offerlisting/rbl-bank-younique-credit-card-offer-rblyouc520.jpg?20112023152050"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            id="circle"
            className="absolute h-14 w-14 rounded-full overflow-hidden mt-[-28px] ml-4"
          >
            <img
              src="https://in.bmscdn.com/offers/tnclogo/rbl-bank-younique-credit-card-offer-rblyouc520.jpg?20112023152051"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8">
            <div id="textbox" className="  ml-[-10px] ">
              <div
                id="text1"
                className="h-6 w-[183px] mt-2 ml-[-10px] line-clamp-1 overflow-hidden  text-sm"
              >
                RBL Bank Younique Credit Card Offer
              </div>
              <div id="text2" className="h-6 w-[183px]  mt-9 flex gap-1">
                <div className="text-xs text-start text-gray-500">
                  Valid till
                </div>
                <div className="text-xs">31 Oct 2024 23:59</div>
              </div>
            </div>
          </div>
        </div>
        <div id="card" className="relative rounded-lg shadow-2xl">
          <div
            id="photo"
            className="relative rounded-t-lg overflow-hidden h-[270px]"
          >
            <img
              src="https://in.bmscdn.com/offers/offerlisting/yes-bank-marquee-credit-card-offer-yesmrq1123.jpg?06022024140523"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            id="circle"
            className="absolute h-14 w-14 rounded-full overflow-hidden mt-[-28px] ml-4"
          >
            <img
              src="https://in.bmscdn.com/offers/tnclogo/yes-bank-marquee-credit-card-offer-yesmrq1123.jpg?06022024140524"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8">
            <div id="textbox" className="  ml-[-10px] ">
              <div
                id="text1"
                className="h-6 w-[183px] mt-2 ml-[-10px] line-clamp-1 overflow-hidden  text-sm"
              >
                YES Bank MARQUEE Credit Card Offer
              </div>
              <div id="text2" className="h-6 w-[183px]  mt-9 flex gap-1">
                <div className="text-xs text-start text-gray-500">
                  Valid till
                </div>
                <div className="text-xs">31 Dec 2025 23:59</div>
              </div>
            </div>
          </div>
        </div>

        <div id="card" className="relative rounded-lg shadow-2xl">
          <div
            id="photo"
            className="relative rounded-t-lg overflow-hidden h-[270px]"
          >
            <img
              src="https://in.bmscdn.com/offers/offerlisting/yes-private-credit-card-offer-yespr0917.jpg?06022024140547"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            id="circle"
            className="absolute h-14 w-14 rounded-full overflow-hidden mt-[-28px] ml-4"
          >
            <img
              src="https://in.bmscdn.com/offers/tnclogo/yes-private-credit-card-offer-yesprcc124.jpg?06022024140548"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8">
            <div id="textbox" className="  ml-[-10px] ">
              <div
                id="text1"
                className="h-6 w-[183px] mt-2 ml-[-10px] line-clamp-1 overflow-hidden  text-sm"
              >
                Yes Private Credit Card Offer
              </div>
              <div id="text2" className="h-6 w-[183px]  mt-9 flex gap-1">
                <div className="text-xs text-start text-gray-500">
                  Valid till
                </div>
                <div className="text-xs">31 Dec 2025 23:59</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
