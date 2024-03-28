import React from "react";
import corp from "../Resources/corp-banner-bg.jpg";

const Corporates = () => {
  return (
    <div>
      <div className="maincointainer w-full h-full ">
        <div className="banner w-screen h-96 flex justify-center items-center overflow-hidden">
          <img
            src={corp}
            alt="banner pic"
            className="w-full"
            style={{ position: "relative" }}
          />
          <div
            className="innerbanner w-3/5 text-white flex items-center font-serif"
            style={{ position: "absolute", zIndex: "2" }}
          >
            <div className="leftbanner w-1/2 h-52  ">
              <div className="headban text-4xl mb-4">
                <h1>Entertainment you can gift.</h1>
              </div>
              <div className="centerban text-xl">
                {" "}
                A variety of solutions to skyrocket your business with
                vouchers,promotions,loyalty,employee recognition & rewards.
              </div>
              <div className="botbanner flex justify-around text-xl mt-1">
                <div className="watchvideo flex justify-around">
                  <div className="icon">
                    <img
                      src="https://in.bmscdn.com/webin/corporate/watch-video.png"
                      alt="watch video"
                    />
                  </div>
                  <div className="vidd">Watch video</div>
                </div>
                <div className="download flex justify-around">
                  <div className="icon">
                    <img
                      src="https://in.bmscdn.com/webin/corporate/brochure.png"
                      alt="download"
                    />
                  </div>
                  <div className="broucher">Download Broucher</div>
                </div>
              </div>
            </div>
            <div className="rightbanner w-1/2 h-52 bg-slate-200"></div>
          </div>
        </div>
        <div className="partners w-3/5 h-56 p-3 m-auto bg-white">
          <div className="head mb-8 mt-4 flex items-center justify-center text-lg font-serif">
            OUR PARTNERS
          </div>
          <div className="partnames flex justify-around gap-5 m-auto h-auto w-auto ">
            <div className="hp">
              <img
                src="https://in.bmscdn.com/webin/corporate/hp-logo.png"
                alt=""
              />
            </div>
            <div className="ola">
              <img
                src="https://in.bmscdn.com/webin/corporate/ola-logo.png"
                alt=""
              />
            </div>
            <div className="axis">
              <img
                src="https://in.bmscdn.com/webin/corporate/axis-logo.png"
                alt=""
              />
            </div>
            <div className="mastercard">
              <img
                src="https://in.bmscdn.com/webin/corporate/mastercard-logo.png"
                alt=""
              />
            </div>
            <div className="icic">
              <img
                src="https://in.bmscdn.com/webin/corporate/icici-logo.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="statistics w-3/5 h-56 p-3 m-auto flex justify-center bg-slate-300">
          <div className="partnames flex justify-around gap-5 m-auto h-auto w-full">
            <div className="scities ">
              <div>
                <h1>1000+</h1>
              </div>
              <div>CITIES</div>
            </div>
            <div className="sscreens ">
              <div>
                <h1>6000</h1>
              </div>
              <div>SCREENS</div>
            </div>
            <div className="trust ">
              <div className="text-center">
                <h1>1000+</h1>
              </div>
              <div>
                CORPORATES <br /> WHO TRUST US
              </div>
            </div>
            <div className="tick ">
              <div>
                <h1>15 MILLIONS+</h1>
              </div>
              <div>
                TICKETS SOLD <br /> PER MONTHS
              </div>
            </div>
            <div className="pages ">
              <div>
                <h1>4 BILLION</h1>
              </div>
              <div>
                PAGE VIEWS <br /> PER MONTH
              </div>
            </div>
          </div>
        </div>
        <div className="crosscards w-3/5 m-auto bg-gray-950">
          <div className="caard1 w-full h-96 flex bg-gray-300">
            <div className="innerrleft w-1/2 h-full border flex items-center ">
              <div className="mai">
                <div className="">WHAT’S IN IT FOR YOU</div>
                <div className="">Brand Promotions</div>
                <div className="">
                  Gifting entertainment is a fun way to push your brand’s
                  message. And the ways you can use vouchers are endless. For
                  example, upselling celebrity-endorsed products timed with a
                  movie release.
                </div>
                <div className="">Promote your brand</div>
              </div>
            </div>
            <div className="innerrright w-1/2 h-full">
              <img
                className="h-full"
                src="https://in.bmscdn.com/webin/corporate/steven-libralon.png"
                alt=""
              />
            </div>
          </div>
          <div className="caard2 w-full h-96 flex bg-gray-300">
            <div className="innerrright w-1/2 h-full">
              <img
                className="h-full"
                src="https://in.bmscdn.com/webin/corporate/steven-libralon.png"
                alt=""
              />
            </div>
            <div className="innerrleft w-1/2 h-full border flex items-center ">
              <div className="mai">
                <div className="">WHAT’S IN IT FOR YOU</div>
                <div className="">Brand Promotions</div>
                <div className="">
                  Gifting entertainment is a fun way to push your brand’s
                  message. And the ways you can use vouchers are endless. For
                  example, upselling celebrity-endorsed products timed with a
                  movie release.
                </div>
                <div className="">Promote your brand</div>
              </div>
            </div>
          </div>
          <div className="caard3 w-full h-96 flex bg-gray-300">
            <div className="innerrleft w-1/2 h-full border flex items-center ">
              <div className="mai">
                <div className="">WHAT’S IN IT FOR YOU</div>
                <div className="">Brand Promotions</div>
                <div className="">
                  Gifting entertainment is a fun way to push your brand’s
                  message. And the ways you can use vouchers are endless. For
                  example, upselling celebrity-endorsed products timed with a
                  movie release.
                </div>
                <div className="">Promote your brand</div>
              </div>
            </div>
            <div className="innerrright w-1/2 h-full">
              <img
                className="h-full"
                src="https://in.bmscdn.com/webin/corporate/steven-libralon.png"
                alt=""
              />
            </div>
          </div>
          <div className="caard4 w-full h-96 flex bg-gray-300">
            <div className="innerrright w-1/2 h-full">
              <img
                className="h-full"
                src="https://in.bmscdn.com/webin/corporate/steven-libralon.png"
                alt=""
              />
            </div>
            <div className="innerrleft w-1/2 h-full border flex items-center ">
              <div className="mai">
                <div className="">WHAT’S IN IT FOR YOU</div>
                <div className="">Brand Promotions</div>
                <div className="">
                  Gifting entertainment is a fun way to push your brand’s
                  message. And the ways you can use vouchers are endless. For
                  example, upselling celebrity-endorsed products timed with a
                  movie release.
                </div>
                <div className="">Promote your brand</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporates;
