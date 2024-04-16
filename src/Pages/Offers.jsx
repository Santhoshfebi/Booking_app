import React from "react";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col  w-[80%] py-2">
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
          <div className="flex items-center justify-center py-4 gap-3">
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
                <i className="bi bi-sticky text-4xl text-gray-500 transition-colors duration-300 group-hover:text-white"></i>
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
                <i className="bi bi-currency-rupee text-4xl text-gray-500 transition-colors duration-300 group-hover:text-white"></i>
              </div>
              <span className="text-sm mt-3 text-gray-500 transition-colors duration-300 group-hover:text-red-400">
                Pay Later
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id="cards" className=" p-8 flex justify-center gap-4 bg-gray-100 ">
        <div className="flex  gap-3 px-2 py-2">
          <div
            id="card"
            className="relative rounded-lg shadow-2xl z-10 cursor-pointer group"
          >
            <Link to={"../offers/credit"}>
              <div
                id="photo"
                className="relative rounded-t-lg overflow-hidden h-[270px] "
              >
                <img
                  src="https://in.bmscdn.com/offers/offerlisting/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?07122023114930"
                  alt=""
                  className="h-full w-full object-cover "
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-100 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col  items-center pt-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                  <div className="text-sm font-bold ">ABOUT OFFER</div>
                  <hr className="w-full border-t border-gray-400 my-3"></hr>
                  <div className="w-[180px] mt-6">
                    <p className="text-xs">
                      Get 2 free movie tickets or INR 500 off whichever is less
                      with SBI Signature/Elite credit cards
                    </p>
                  </div>
                  <div className="mt-[56px]">
                    <div className="text-xs ">AVAILABLE FOR</div>
                    <div className="flex mt-3 gap-3">
                      <div className="relative group">
                        <div className="border border-white text-xl text-white rounded-full h-8 w-8 flex items-center justify-center peer">
                          <i className="bi bi-laptop"></i>
                        </div>
                        <span className="absolute  text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300 top-full left-1/2 transform -translate-x-1/2 peer-hover:opacity-100">
                          Web
                        </span>
                      </div>

                      <div className="relative ">
                        <div className="border border-white text-xl text-white rounded-full h-8 w-8 flex items-center justify-center peer ">
                          <i className="bi bi-phone"></i>
                        </div>
                        <span className="absolute text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300 top-full left-1/2 transform -translate-x-1/2  peer-hover:opacity-100">
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
                <div id="textbox" className=" ">
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
            </Link>
          </div>
          <div
            id="card"
            className="relative rounded-lg shadow-2xl z-10 cursor-pointer group"
          >
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
              <div id="textbox" className="   ">
                <div
                  id="text1"
                  className="h-6 w-[183px] mt-2 line-clamp-1 overflow-hidden  text-sm text-start"
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
          <div
            id="card"
            className="relative rounded-lg shadow-2xl z-10 cursor-pointer group"
          >
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
              <div id="textbox" className="   ">
                <div
                  id="text1"
                  className="h-6 w-[183px] mt-2  line-clamp-1 overflow-hidden  text-sm text-start"
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
          <div
            id="card"
            className="relative rounded-lg shadow-2xl z-10 cursor-pointer group"
          >
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
              <div id="textbox" className="   ">
                <div
                  id="text1"
                  className="h-6 w-[183px] mt-2  line-clamp-1 overflow-hidden  text-sm text-start"
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
          <div
            id="card"
            className="relative rounded-lg shadow-2xl z-10 cursor-pointer group"
          >
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
              <div id="textbox" className="   ">
                <div
                  id="text1"
                  className="h-6 w-[183px] mt-2  line-clamp-1 overflow-hidden  text-sm text-start"
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
      <div className=" bg-gray-100">
        <div className="flex justify-center items-center">
          <div className="w-[90%]">
            <div className=" flex flex-col items-center justify-between ">
              <h3 className="text-sm text-gray-500 ">
                <strong>
                  A Plethora of Offers and Discounts at BookMyShow!
                </strong>
              </h3>
              <div className="text-xs text-gray-400 flex items-center justify-center py-6">
                <div className="text-start">
                  If you are searching for some <strong>discount offers</strong>{" "}
                  on movie tickets, then BookMyShow is the place for you! Browse
                  through our huge array of <strong>movie ticket offers</strong>{" "}
                  and save big every time you book movies tickets with us.
                  Discover these special{" "}
                  <strong>offers on movie tickets,</strong>
                  customized especially for you!
                </div>
              </div>

              <div className="flex">
                <div className="flex w-[90%]  gap-4">
                  <div className="flex flex-col text-start ">
                    <div className="text-gray-400 text-sm py-2 ">
                      Cards offers
                    </div>
                    <div className="text-gray-400 text-xs text-justify">
                      There is a gamut of credit and{" "}
                      <strong>debit card offers</strong> provided by some of the
                      leading banks in India like ICICI, RBL, Citi Bank, SBI,
                      Axis Bank, HDFC, RBS, IndusInd, HDFC and many more. By
                      availing one of these Debit or{" "}
                      <strong>credit card offers,</strong> you can save
                      massively on your movie tickets.
                    </div>
                  </div>

                  <div className="flex flex-col text-start ">
                    <div className="text-gray-400 text-sm py-2 ">
                      {" "}
                      Wallet and recharge offers
                    </div>
                    <div className="text-gray-400 text-xs text-justify">
                      {" "}
                      Wallets and online recharge providers also offer great
                      discounts and deals on{" "}
                      <strong>movie ticket booking.</strong> Using providers
                      like Freecharge, MobiKwik, PayUMoney Payzapp, Ola Money,
                      Pockets by ICICI, and Airtel Money while booking movie
                      tickets on our platform, you can get instant cashback and
                      discount.
                    </div>
                  </div>

                  <div className="flex flex-col text-start ">
                    <div className="text-gray-400 text-sm py-2 ">
                      Cinema Offers
                    </div>
                    <div className="text-gray-400 text-xs text-justify">
                      {" "}
                      Cinemas like{" "}
                      <a href="/cinemas-list/pvr/all" title="PVR Cinemas">
                        PVR
                      </a>{" "}
                      and{" "}
                      <a
                        href="/cinemas-list/cinepolis/all-regions/cnpl"
                        title="”Cinepolis”"
                      >
                        Cinepolis
                      </a>{" "}
                      runs some special <strong>offers on movies</strong> with
                      BookMyShow. So, here is yet another reason why you should
                      book your movie tickets with us!
                    </div>
                  </div>

                  <div className="flex flex-col text-start ">
                    <div className="text-gray-400 text-sm py-2 ">
                      Telecom Offers
                    </div>
                    <div className="text-gray-400 text-xs text-justify">
                      We have some special offers for some selected* Vodafone
                      and Idea Users. If you are that lucky selected user, then
                      you can get up to 50% off on your movie tickets. It can't
                      get better than this! Right?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs py-3 text-gray-400 text-start ml-16">
        Online Tickets &rarr; Offers
      </div>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="w-[90%] ">
          <div className="py-4">
            <h2 className="text-lg text-gray-500 text-start">
              <b>Privacy Note</b>{" "}
            </h2>
          </div>
          <div className="pb-6">
            <div class="text-justify text-sm text-gray-400">
              By using www.bookmyshow.com(our website), you are fully accepting
              the Privacy Policy available at{" "}
              <a href="/privacy" className="text-red-600">
                https://bookmyshow.com/privacy
              </a>{" "}
              governing your access to Bookmyshow and provision of services by
              Bookmyshow to you. If you do not accept terms mentioned in the{" "}
              <a href="/privacy" className="text-red-600">
                Privacy Policy
              </a>
              , you must not share any of your personal information and
              immediately exit Bookmyshow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
