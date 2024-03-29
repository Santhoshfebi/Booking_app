
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Flickity from "flickity";

const ListYourShow = () => {
 useEffect(() => {
   const flkty = new Flickity(".slidingImagesParentDiv", {
     wrapAround: true,
     autoPlay: true,
   });

   return () => {
     flkty.destroy();
   };
 }, []);
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    /*<-------------------------------- universal font family----------------------------> */\n    * {\n      font-family: \"Roboto\", sans-serif;\n    }\n\n    /* <------------------------------- body color and margin padding of body element ---------------------------------------> */\n    body {\n      background-color: rgb(245, 245, 245);\n      margin: 0;\n      padding: 0;\n    }\n\n    /* <----------------------------------- NavBar CSS -------------------------------------------> */\n    .navbar {\n      overflow: hidden;\n      background-color: rgb(50, 53, 69);\n    }\n\n    .navbar a {\n      float: right;\n      font-size: 16px;\n      color: white;\n      text-align: center;\n      padding: 14px 16px;\n      text-decoration: none;\n    }\n\n    .dropdown {\n      float: right;\n      overflow: hidden;\n    }\n\n    .dropdown .dropbtn {\n      font-size: 16px;\n      border: none;\n      outline: none;\n      color: white;\n      padding: 14px 16px;\n      background-color: inherit;\n      font-family: inherit;\n      margin: 0;\n    }\n\n    .dropdown-content {\n      border: 1px solid grey;\n      display: none;\n      /* position: absolute; */\n      background-color: #f9f9f9;\n      min-width: 100%;\n      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n      z-index: 1;\n      height: 520px;\n    }\n\n    .dropdown-content a {\n      float: none;\n      color: black;\n      padding: 12px 16px;\n      text-decoration: none;\n      display: block;\n      text-align: left;\n    }\n\n    .close {\n      position: absolute;\n      top: 14%;\n      right: 1%;\n      font-size: 42px;\n      color: rgb(15, 15, 15);\n      transform: rotate(45deg);\n      cursor: pointer;\n    }\n\n    .fleft {\n      float: left;\n      color: white;\n      padding-top: 10px;\n      font-size: 22px;\n      font-weight: 200;\n    }\n\n    #logoDiv {\n      margin-left: 80px;\n    }\n\n    #logobyJchy {\n      height: 30px;\n      width: 30px;\n    }\n\n    #userInput {\n      height: 30px;\n      width: 50%;\n      margin-top: 10px;\n      margin-left: 20px;\n      border-radius: 5px;\n      padding-left: 10px;\n      font-size: 14px;\n    }\n\n    #signIn {\n      height: 10px;\n      width: 80px;\n      font-size: 16px;\n      margin-top: 8px;\n      background-color: rgb(248, 67, 100);\n      border-radius: 3px;\n      padding-top: 4px;\n      margin-right: 20px;\n    }\n\n    #sideMenu {\n      font-size: 30px;\n      cursor: pointer;\n      float: right;\n      margin-right: 20px;\n      color: white;\n      font-weight: 300;\n    }\n\n    .sidenav {\n      display: none;\n      height: 100%;\n      width: 250px;\n      position: fixed;\n      z-index: 1;\n      top: 0;\n      right: 0;\n      background-color: white;\n      overflow-x: hidden;\n      padding-top: 60px;\n    }\n\n    .sidenav a {\n      text-decoration: none;\n      text-align: left;\n      font-size: 16px;\n      color: black;\n    }\n\n    .sidenav a:hover {\n      color: white;\n    }\n    .sidenav :hover {\n      background-color: rgb(34, 37, 57);\n    }\n\n    .sidenav .closebtn {\n      position: absolute;\n      top: 0;\n      right: 25px;\n      font-size: 36px;\n    }\n\n    .sidenav div>a {\n      display: block;\n      width: 200px;\n      text-align: left;\n      border-bottom: 0.1px solid grey;\n    }\n\n    @media screen and (max-height: 450px) {\n      .sidenav {\n        padding-top: 15px;\n      }\n\n      .sidenav a {\n        font-size: 18px;\n      }\n    }\n\n    .ncr-img {\n      height: 100px;\n      width: 100%;\n      margin: 0.5%;\n    }\n\n    #ncr-input {\n      display: inline-block;\n      height: 35px;\n      width: 80%;\n      /* margin: 2%; */\n      color: grey;\n      margin-top: 3rem;\n      margin-left: 10%;\n      margin-right: 10%;\n      border: 1px solid grey;\n      font-size: 14px;\n      padding-left: 1rem;\n    }\n\n    .txtCenter {\n      text-align: center;\n      padding-right: 35%;\n    }\n\n    .floatLeft {\n      float: left;\n      text-align: center;\n      /* width:11%; */\n    }\n\n    #navBarSeconfLine {\n      background-color: rgb(34, 37, 57);\n      padding-bottom: 10px;\n      padding-top: 15px;\n      font-size: 14px;\n    }\n\n    #navBarSeconfLine>a {\n      text-decoration: none;\n      color: black;\n      height: 30px;\n      width: 8%;\n      color: white;\n      padding: 10px;\n    }\n\n    .floatRyt {\n      float: right;\n      padding-bottom: 10px;\n      padding-top: 15px;\n      height: 25px;\n    }\n\n    #buzz {\n      margin-right: 28%;\n    }\n\n    #nav2MoviesTag {\n      margin-left: 10%;\n    }\n\n    /* --------------------------------------------HORIZONTAL SLIDING BAR------------------------------------------- /\n\n    NO CSS FOR THIS THING IT ONLY NEEDS LIBRARY TO BE IMPORTED FROM Flickity \n    .slidingImages {\n      margin-left: 10px;\n    }\n\n    .slidingImagesParentDiv {\n      margin-bottom: 40px;\n    }\n\n    .slidingHorizontalBarSection {\n      background-color: rgb(242, 245, 249);\n    }\n\n     ------------------------------------------------ What you can host ------------------------------------------------ */\n\n    .calign {\n      text-align: center;\n      padding-top: 50px;\n    }\n\n    .whatCanHostSection {\n      background-color: white;\n      padding: 10px;\n      padding-left: 22%;\n      padding-right: 10%;\n    }\n\n    .container {\n      margin-top: 50px;\n      display: flex;\n      flex-wrap: wrap;\n      gap: 2rem;\n    }\n\n    .hostContent {\n      text-align: center;\n      height: 150px;\n      width: 150px;\n      border: 1px solid rgb(194, 192, 192);\n      padding: 50px;\n      background-color: rgb(236, 245, 255);\n    }\n\n    .hostContent:hover {\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    }\n\n    .hostContent>img {\n      height: 80px;\n      width: 80px;\n    }\n\n    .hostContent>h1+img {\n      height: 25px;\n      width: 25px;\n    }\n\n    .bf{\n      font-size: 48px;\n      font-weight: 900;\n      padding-left: 0%;\n      padding-right: 20%;\n    }\n\n    .conferenceSection {\n      background-color: white;\n      display: flex;\n      justify-content: center;\n    }\n\n    .service {\n      background-color: rgb(252, 240, 241);\n      height: 210px;\n      width: 230px;\n      padding: 10px;\n      padding-top: 20px;\n      padding-bottom: 28px;\n    }\n\n    /* <----------------------------------- List Your Shows --------------------------------> */\n\n    .listShowSection {\n      background-color: white;\n      text-align: center;\n      padding-top: 10px;\n      padding-bottom: 50px;\n    }\n\n    .listShowBtn {\n      background-color: rgb(220, 54, 89);\n      color: white;\n      height: 50px;\n      width: 250px;\n      border-radius: 10px;\n      font-size: 16px;\n      border: 1px solid rgb(220, 54, 89);\n    }\n\n    .listShowBtn:hover {\n      height: 48px;\n      width: 240px;\n      cursor: pointer;\n    }\n\n    /* ------------------------------------------ Comment Section ------------------------------------------ */\n\n    .commentSection {\n      box-sizing: border-box;\n    }\n\n    .carousel {\n      background: white;\n    }\n\n    .pimg {\n      border-radius: 25px;\n    }\n\n    .carousel-cell {\n      width: 100%;\n      height: 400px;\n      margin-right: 10px;\n      background: #8C8;\n      border-radius: 5px;\n      counter-increment: carousel-cell;\n    }\n\n    /* cell number */\n    .carousel-cell:before {\n      display: block;\n      text-align: center;\n      content: counter(carousel-cell);\n      line-height: 200px;\n      font-size: 80px;\n      color: white;\n    }\n\n\n    /* ---------------------------------------SIT Back ---------------------------------------- */\n    #sitbackSection {\n      background-color: white;\n      padding: 80px;\n      padding-top: 0px;\n    }\n\n    .sitBack {\n      display: flex;\n      justify-content: center;\n      text-align: center;\n      font-size: 32px;\n    }\n\n    #sitBackP {\n      font-size: 18px;\n      font-weight: normal;\n      font-weight: 300;\n    }\n\n    #sitbackH1 {\n      width: 70%;\n      background-image: url('https://in.bmscdn.com/static/2021/06/security-imag.jpeg');\n      font-weight: 900;\n      margin: auto;\n    }\n\n\n    /* ---------------------------------- We are Proud of what we do -------------------------------- */\n    #proudSection {\n      background-color: white;\n      background-color: rgb(231, 54, 77);\n      color: white;\n      padding: 100px;\n    }\n\n    #h1p {\n      text-align: center;\n    }\n\n    .proudp {\n      font-size: 18px;\n    }\n\n    .proudh1 {\n      font-size: 48px;\n      font-weight: 900;\n    }\n\n    .stats {\n      display: flex;\n      justify-content: center;\n    }\n\n    .stats>div {\n      margin: 40px;\n      text-align: center;\n    }\n\n    #popupForm {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n\n    #popupForm a:link,\n    a:visited {\n      text-decoration: none;\n    }\n\n    .popupmodal {\n      background-color: rgba(0, 0, 0, .8);\n      width: 100%;\n      height: 100vh;\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 10;\n      opacity: 0;\n      visibility: hidden;\n      transition: all .5s;\n    }\n\n    .popupmodal__content {\n      width: 400px;\n      height: 60%;\n      background-color: #fff;\n      color: black;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      padding: 56px 32px;\n      border-radius: 1em;\n      opacity: 0;\n      visibility: hidden;\n      transition: all .5s;\n    }\n\n    #popupmodal:target {\n      opacity: 1;\n      visibility: visible;\n    }\n\n    #popupmodal:target .popupmodal__content {\n      opacity: 1;\n      visibility: visible;\n    }\n\n    .popupmodal__close {\n      color: #363636;\n      font-size: 24px;\n      border: 1px solid grey;\n      padding: 5px;\n      padding-left: 40px;\n      padding-right: 40px;\n      background-color: rgb(252, 112, 5);\n      position: absolute;\n      top: 80%;\n      right: 26%;\n    }\n\n    .popupmodal__heading {\n      font-weight: bold;\n    }\n\n    .popupmodal__paragraph {\n      line-height: 1.5em;\n    }\n\n\n    .proudBtn {\n      text-align: center;\n      padding-left: 80px;\n      padding-Right: 80px;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      font-size: 18px;\n      border-radius: 10px;\n      background-color: white;\n      color: rgb(231, 54, 77);\n      border: 1px solid rgb(231, 54, 77);\n    }\n\n    #proudBtnDiv {\n      text-align: center;\n      padding-top: 80px;\n    }\n\n    .proudBtn:hover {\n      padding-left: 75px;\n      padding-Right: 75px;\n      padding-top: 8px;\n      padding-bottom: 8px;\n      cursor: pointer;\n    }\n\n    .popup-flex-box {\n      display: flex;\n    }\n\n    /* <-------------------------------------- FOOTER -------------------------------------------> */\n\n\n\n    /* <-------------------------------------------- Privacy Note --------------------------------> */\n\n    .privacyNote {\n      padding: 10px;\n      padding-left: 110px;\n      background-color: rgb(216, 215, 215);\n    }\n\n    .privacyNote>h4 {\n      font-weight: 300;\n      color: rgb(127, 127, 127);\n    }\n\n    .privacyNote>p {\n      font-size: 12px;\n      color: rgb(127, 127, 127);\n    }\n\n    /* <-------------------------------------------- Contact Today --------------------------------*/\n    .contactToday {\n      display: flex;\n      flex-wrap: wrap;\n      padding: 20px;\n      padding-left: 250px;\n    }\n\n    .contactP {\n      margin-left: 20px;\n      margin-right: 20px;\n      padding-top: 10px;\n    }\n\n    .contactBtn {\n      background-color: rgb(245, 80, 102);\n      padding: 8px;\n      font-size: 14px;\n      margin-top: 20px;\n      width: 150px;\n      border-radius: 5px;\n      cursor: pointer;\n      border: 1px solid rgb(245, 80, 102);\n    }\n\n    .contactBtn:hover {\n      width: 145px;\n    }\n\n    .contactTodaySection {\n      background-color: rgb(49, 48, 53);\n      color: rgb(212, 212, 212);\n      font-weight: 300;\n    }\n\n\n    .footer {\n      display: flex;\n      gap: 2rem;\n      color: white;\n      background-color: rgb(51, 51, 56);\n    }\n\n    .footer h4 {\n      color: rgb(90, 89, 89);\n    }\n\n    .firstCol {\n      margin-left: 10%;\n    }\n\n    .lastCol {\n      margin-left: 5%;\n      margin-right: 10%;\n    }\n\n    .icon {\n      border: 1px solid grey;\n      height: 30px;\n      width: 40px;\n      border: 1px solid grey;\n      float: left;\n      text-align: center;\n      padding-top: 10px;\n      margin-right: 10px;\n      border-radius: 20px;\n    }\n\n    #lastP {\n      clear: both;\n      margin-top: 100px;\n    }\n\n    .widthFooter {\n      width: 30%;\n    }\n\n    #logoFooter {\n      height: 60px;\n      width: 80px;\n      background-color: rgb(31, 31, 46);\n      margin-top: 20px;\n      border: 1px solid grey;\n      border-radius: 20px;\n    }\n\n    .footerTop {\n      background-color: rgb(49, 48, 53);\n      padding: 50px;\n      font-size: 12px;\n      color: rgb(101, 101, 103);\n    }\n\n    #footer {\n      background-color: rgb(51, 51, 56);\n      padding-top: 20px;\n      /* padding: 20px; */\n    }\n\n\n    #foooterIconBar {\n      display: flex;\n      gap: 12rem;\n      text-align: center;\n      color: rgb(134, 137, 141);\n      font-size: 11px;\n      background-color: rgb(64, 64, 67);\n      padding: 20px;\n      /* background-color:black; */\n    }\n\n\n    #foooterIconBar>div>img {\n      border-radius: 30px;\n      padding: 3px;\n    }\n\n\n    #customerCare {\n      margin-left: 12rem;\n    }\n\n    .footer>div>h4 {\n      font-size: 12px;\n      color: rgb(165, 165, 165, 165);\n      /* color: red; */\n    }\n\n    .footer>div>p {\n      font-size: 11px;\n      color: rgb(101, 101, 103);\n      /* color: red; */\n    }\n\n    #logoDiv2 {\n      margin-left: 20px;\n      background-color: rgb(64, 64, 67);\n      color: red;\n    }\n\n    #logobyJchy2 {\n      height: 40px;\n      width: 40px;\n    }\n\n    .fltLft {\n      float: left;\n    }\n\n    #footerLogo {\n      background-color: rgb(88, 89, 91);\n      height: 60px;\n    }\n\n    .line {\n      height: 0.5px;\n      background-color: rgb(169, 169, 170);\n      margin-top: 30px;\n    }\n\n    #pdLft {\n      padding-left: 20px;\n    }\n\n    #pdRyt {\n      padding-right: 20px;\n    }\n\n    #footerIcons {\n      padding-top: 50px;\n      display: flex;\n      clear: both;\n      padding-left: 35%;\n\n    }\n\n    #footerIcons>div {\n      height: 50px;\n      width: 58px;\n      font-size: 30px;\n      background-color: rgb(93, 93, 95);\n      border-radius: 34px;\n      margin: 10px;\n      border: 1px solid black;\n      padding-top: 10px;\n      text-align: center;\n    }\n\n    #footerIcons>div:hover {\n      background-color: white;\n    }\n\n    #footerPara {\n      font-size: 12px;\n      padding: 50px;\n    }\n\n    .contentList>p:hover {\n      cursor: pointer;\n    }\n\n\n    /* <----------------------------------------------------POPUP Form btn ----------------------------------------------------------------> */\n\n    .popup2modal__closeListYourShow {\n      color: white;\n      font-size: 24px;\n      border: 1px solid grey;\n      padding: 5px;\n      padding-left: 40px;\n      padding-right: 40px;\n      background-color: rgb(231, 54, 77);\n      text-decoration: none;\n      margin-left: 24%;\n    }\n\n    #popup2Form {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n\n    #popup2Form a:link,\n    a:visited {\n      text-decoration: none;\n    }\n\n    .popup2modal {\n      background-color: rgba(0, 0, 0, .8);\n      width: 100%;\n      height: 100vh;\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 10;\n      opacity: 0;\n      visibility: hidden;\n      transition: all .5s;\n    }\n\n    .popup2modal__content {\n      width: 400px;\n      height: 60%;\n      background-color: #fff;\n      color: black;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      padding: 56px 32px;\n      border-radius: 1em;\n      opacity: 0;\n      visibility: hidden;\n      transition: all .5s;\n      text-align: left;\n      overflow-y: scroll;\n    }\n\n    #popup2modal:target {\n      opacity: 1;\n      visibility: visible;\n    }\n\n    #popup2modal:target .popup2modal__content {\n      opacity: 1;\n      visibility: visible;\n    }\n\n    .popup2modal__heading {\n      font-weight: bold;\n    }\n\n    .popup2modal__paragraph {\n      line-height: 1.5em;\n    }\n\n\n    .proudBtn2 {\n      text-align: center;\n      padding-left: 80px;\n      padding-Right: 80px;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      font-size: 18px;\n      border-radius: 10px;\n      background-color: white;\n      color: rgb(231, 54, 77);\n      border: 1px solid rgb(231, 54, 77);\n    }\n\n    #proudBtn2Div {\n      /* text-align: center; */\n      padding-top: 80px;\n    }\n\n    .proudBtn2:hover {\n      padding-left: 75px;\n      padding-Right: 75px;\n      padding-top: 8px;\n      padding-bottom: 8px;\n      cursor: pointer;\n    }\n\n    .popup2-flex-box {\n      display: flex;\n    }\n    .popUp2Bg {\n      color: white;\n      text-decoration: none;\n      background-color: rgb(245, 80, 102);\n    }\n    .lysBtnDblock{\n      display: block;\n    }\n    .inputWidth{\n      width: 380px;\n      height:40px;\n      margin: auto;\n      border: 1px solid white;\n      border-bottom: 1px solid grey;\n      font-size: 16px;\n      padding-left: 10px;\n    }\n    #description{\n      margin-bottom: 20px;\n    }\n  ",
          }}
        />

        {/*--------------------------- Sliding horizontal bar ----------------------------------*/}
        <section
          style={{
            position: "relative",
            width: "100%",
            height: "50vh",
            overflow:"hidden"
          }}
          className="slidingHorizontalBarSection"
        >
          <div
            style={{ width: "100%", height: "100%" }}
            className="js-flickity slidingImagesParentDiv"
          >
            <div
              style={{ width: "100%", height: "100%" }}
              className="slidingImages"
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src="https://in.bmscdn.com/promotions/cms/creatives/1635328594298_valleyrundesktop.jpg"
                alt=""
              />
              
            </div>
            <div
              style={{ width: "100%", height: "100%" }}
              className="slidingImages"
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src="https://in.bmscdn.com/promotions/cms/creatives/1629887023798_rugbyworldcuplisting_webshowcasenew_1240x300.jpg"
                alt=""
              />
            </div>
            <div
              style={{ width: "100%", height: "100%" }}
              className="slidingImages"
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src="https://in.bmscdn.com/promotions/cms/creatives/1633590513692_moviemunchies_webshowcase_1240x300_7oct.jpg"
                alt=""
              />
            </div>
            <div
              style={{ width: "100%", height: "100%" }}
              className="slidingImages"
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src="https://in.bmscdn.com/promotions/cms/creatives/1635405147427_indiadriveinhpdesktop.jpg"
                alt=""
              />
            </div>
            <div
              style={{ width: "100%", height: "100%" }}
              className="slidingImages"
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src="https://in.bmscdn.com/promotions/cms/creatives/1633590513692_moviemunchies_webshowcase_1240x300_7oct.jpg"
                alt=""
              />
            </div>
            <div
              style={{ width: "100%", height: "100%" }}
              className="slidingImages"
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src="https://in.bmscdn.com/promotions/cms/creatives/1635516222490_nft_webshowcase_1240x300.jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* <----------------------------- What can You Host --------------------------------------------------- */}
        <section className="whatCanHostSection">
          <h1 className="calign bf">What can you host?</h1>
          <p className="calign">
            As the purveyor of entertainment, BookMyShow enables your event with
            end to end solutions from the time you register to the completion of
            the event. Let’s look at what you can host.
          </p>
          <div className="container">
            <div className="hostContent">
              <img
                src="https://in.bmscdn.com/static/2021/06/online-stream-play.png"
                alt
              />
              <h1>Streaming</h1>
              <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
            </div>
            <div className="hostContent">
              <img src="https://in.bmscdn.com/static/2021/06/perf.png" alt />
              <h1>Performance</h1>
              <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
            </div>
            <div className="hostContent">
              <img
                src="https://in.bmscdn.com/static/2021/06/experiencess.png"
                alt
              />
              <h1>Experience</h1>
              <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
            </div>
            <div className="hostContent">
              <img
                src="https://in.bmscdn.com/static/2021/06/expositionss.png"
                alt
              />
              <h1>Expositions</h1>
              <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
            </div>
            <div className="hostContent">
              <img
                src="https://in.bmscdn.com/static/2021/06/partiess.png"
                alt
              />
              <h1>Parties</h1>
              <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
            </div>
            <div className="hostContent">
              <img src="https://in.bmscdn.com/static/2021/06/sport.png" alt />
              <h1>Sports</h1>
              <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
            </div>
          </div>
        </section>
        <section className="conferenceSection">
          <div className="hostContent conference">
            <img
              src="https://in.bmscdn.com/static/2021/06/conferencess.png"
              alt
            />
            <h1>Conference</h1>
            <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
          </div>
        </section>
        {/* ------------------------------------------------ List Your Shows -- ----------------------------------------------*/}
        <section className="listShowSection">
          <section className="popup2Form">
            <div id="proudBtn2Div">
              <a href="#popup2modal" className="proudBtn2 popUp2Bg">
                List your show
              </a>
            </div>
            <div className="popup2modal" id="popup2modal">
              <div className="popup2modal__content">
                <h2 className="popup2modal__heading">
                  Please fill in the following details
                </h2>
                <div>
                  <p>Your name </p>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="inputWidth"
                  />
                </div>
                <div>
                  <p>Email </p>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="inputWidth"
                  />
                </div>
                <div>
                  <p>Phone number</p>
                  <input
                    type="number"
                    placeholder={9876543210}
                    className="inputWidth"
                  />
                </div>
                <p>Event Region</p>
                <select
                  name="Select Region"
                  id="eventRegion"
                  className="inputWidth"
                >
                  <option value>East</option>
                  <option value>West</option>
                  <option value>North</option>
                  <option value>South</option>
                </select>
                <p>Event City</p>
                <select
                  name="Select City"
                  id="eventCity"
                  className="inputWidth"
                >
                  <option value>Mumbai</option>
                  <option value>Pune</option>
                  <option value>Delhi</option>
                  <option value>Bangalore</option>
                </select>
                <p>Expected Audience</p>
                <select
                  name="Select City"
                  id="evetAudience"
                  className="inputWidth"
                >
                  <option value>Less than 100</option>
                  <option value>100 to 1500</option>
                  <option value>1500 to 5000</option>
                  <option value>More than 5000</option>
                </select>
                <p>Event Date</p>
                <select
                  name="Select City"
                  id="eventDate"
                  className="inputWidth"
                >
                  <option value>This Week</option>
                  <option value>Within 15 days</option>
                  <option value>Within next 2 month</option>
                  <option value>Within next 6 Months</option>
                </select>
                <p>Event Short Description</p>
                <input
                  type="textarea"
                  name="description"
                  id="description"
                  placeholder="Minimum 50 characters"
                  className="inputWidth"
                />
                <br />
                <a
                  href="#"
                  className="popup2modal__closeListYourShow"
                  onclick="welcomeMsg()"
                >
                  Submit
                </a>
              </div>
            </div>
          </section>
        </section>
        {/* <----------------------------- What are the services we offer --------------------------------------------------- */}
        <section className="whatCanHostSection">
          <h1 className="calign bf">What are the services we offer?</h1>
          <p className="calign">
            After successful collaborations with the best event organisers over
            the past decade and a half, we’re well equipped to bring your vision
            to life.
          </p>
          <div className="container">
            <div className="hostContent service">
              <img
                src="https://in.bmscdn.com/static/2021/06/online-saless.png"
                alt
              />
              <h1>Online Sales &amp; Marketing</h1>
              <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
            </div>
            <div className="hostContent service">
              <img
                src="https://in.bmscdn.com/static/2021/06/pricings.png"
                alt
              />
              <h1>Pricing</h1>
              <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
            </div>
            <div className="hostContent service">
              <img src="https://in.bmscdn.com/static/2021/06/food.png" alt />
              <h1>Food &amp; beverages, stalls and the works!</h1>
              <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
            </div>
            <div className="hostContent service">
              <img
                src="https://in.bmscdn.com/static/2021/06/on-ground-support.png"
                alt
              />
              <h1>On ground support &amp; gate entry management</h1>
              <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
            </div>
            <div className="hostContent service">
              <img src="https://in.bmscdn.com/static/2021/06/report.png" alt />
              <h1>Report &amp; business insights</h1>
              <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
            </div>
            <div className="hostContent service">
              <img src="https://in.bmscdn.com/static/2021/06/rfids.png" alt />
              <h1>POS, RFID, Turnstiles &amp; more...</h1>
              <img src="https://in.bmscdn.com/static/2021/06/info.png" alt />
            </div>
          </div>
          <p className="calign">
            As the purveyor of entertainment, BookMyShow enables your event with
            end to end solutions from the time you register to the completion of
            the event. Let’s look at what you can host.
          </p>
        </section>
        {/* ------------------------------------------------ List Your Shows -- ----------------------------------------------*/}
        <section className="listShowSection">
          {/* <button class="listShowBtn">List your show</button> */}
          <section className="popup2Form">
            <div id="proudBtn2Div">
              <a href="#popup2modal" className="proudBtn2 popUp2Bg">
                List your show
              </a>
            </div>
            <div className="popup2modal" id="popup2modal">
              <div className="popup2modal__content">
                <h2 className="popup2modal__heading">
                  Please fill in the following details
                </h2>
                <div>
                  <p>Your name </p>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="inputWidth"
                  />
                </div>
                <div>
                  <p>Email </p>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="inputWidth"
                  />
                </div>
                <div>
                  <p>Phone number</p>
                  <input
                    type="number"
                    placeholder={9876543210}
                    className="inputWidth"
                  />
                </div>
                <p>Event Region</p>
                <select
                  name="Select Region"
                  id="eventRegion"
                  className="inputWidth"
                >
                  <option value>East</option>
                  <option value>West</option>
                  <option value>North</option>
                  <option value>South</option>
                </select>
                <p>Event City</p>
                <select
                  name="Select City"
                  id="eventCity"
                  className="inputWidth"
                >
                  <option value>Mumbai</option>
                  <option value>Pune</option>
                  <option value>Delhi</option>
                  <option value>Bangalore</option>
                </select>
                <p>Expected Audience</p>
                <select
                  name="Select City"
                  id="evetAudience"
                  className="inputWidth"
                >
                  <option value>Less than 100</option>
                  <option value>100 to 1500</option>
                  <option value>1500 to 5000</option>
                  <option value>More than 5000</option>
                </select>
                <p>Event Date</p>
                <select
                  name="Select City"
                  id="eventDate"
                  className="inputWidth"
                >
                  <option value>This Week</option>
                  <option value>Within 15 days</option>
                  <option value>Within next 2 month</option>
                  <option value>Within next 6 Months</option>
                </select>
                <p>Event Short Description</p>
                <input
                  type="textarea"
                  name="description"
                  id="description"
                  placeholder="Minimum 50 characters"
                  className="inputWidth"
                />
                <br />
                <a
                  href="#"
                  className="popup2modal__closeListYourShow"
                  onclick="welcomeMsg()"
                >
                  Submit
                </a>
              </div>
            </div>
          </section>
        </section>
        {/*--------------------------------------------- Sit Back Section -----------------------------------*/}
        <section id="sitbackSection">
          <div className="sitBack">
            <div>
              <h1 id="sitbackH1">Sit back and watch your event come to life</h1>
              <p id="sitBackP">
                Events maybe all fun and games, but we take it seriously. We
                ensure our customer’s security so that you don’t have to.
              </p>
            </div>
          </div>
        </section>
        {/* ---------------------------------------------We are proud of What we do ------------------------------*/}
        <section id="proudSection">
          <div id="h1p">
            <h1 className="proudh1">We're proud of what we do</h1>
            <p className="proudp">
              As the country's largest integrated ticketing portal and we're
              proud to share these stats!
            </p>
          </div>
          <div className="proud">
            <div className="stats">
              <div>
                <h1 className="proudh1">90%</h1>
                <p className="proudp">Market share</p>
              </div>
              <div>
                <h1 className="proudh1">15M</h1>
                <p className="proudp">Monthly active users</p>
              </div>
              <div>
                <h1 className="proudh1">95M</h1>
                <p className="proudp">Tickets sold annually</p>
              </div>
              <div>
                <h1 className="proudh1">2L</h1>
                <p className="proudp">Ticketed events</p>
              </div>
            </div>
            <section id="popupForm">
              <div id="proudBtnDiv">
                <a href="#popupmodal" className="proudBtn">
                  Contact us today!
                </a>
              </div>
              <div className="popupmodal" id="popupmodal">
                <div className="popupmodal__content">
                  <h2 className="popupmodal__heading">
                    This is how it will work
                  </h2>
                  <div className="popup-flex-box">
                    <div>
                      <img
                        src="https://in.bmscdn.com/m6/list-your-show/fill-form.png"
                        alt
                      />
                    </div>
                    <div>
                      <h4>Fill the form</h4>
                      <p>Give us the details of your event</p>
                    </div>
                  </div>
                  <div className="popup-flex-box">
                    <div>
                      <img
                        src="https://in.bmscdn.com/m6/list-your-show/confirm-submit.png"
                        alt
                      />
                    </div>
                    <div>
                      <h4>Confirm &amp; submit</h4>
                      <p>Review your details and submit</p>
                    </div>
                  </div>
                  <div className="popup-flex-box">
                    <div>
                      <img src="https://in.bmscdn.com/m6/list-your-show/connect-back.png" />
                    </div>
                    <div>
                      <h4>We’ll connect back shortly</h4>
                      <p>We’ll get back to you in no time!</p>
                    </div>
                  </div>
                  <a href="#" className="popupmodal__close">
                    List your show
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/*--------------------------------------------- Footer --------------------------------------*/}
        {/* <----------------------------- Privacy Note ---------------------------------------- */}
        <section>
          <div className="privacyNote">
            <h4>Privacy Note</h4>
            <p>
              By using www.bookmyshow.com(our website), you are fully accepting
              the Privacy Policy available at https://bookmyshow.com/privacy
              governing your access to Bookmyshow and provision of services by
              Bookmyshow to you. If you do not accept terms mentioned in the
              Privacy Policy, you must not share any of your personal
              information and immediately exit Bookmyshow.
            </p>
          </div>
        </section>
        {/* <----------------------------- Contact Today ---------------------------------------- */}
        <section className="contactTodaySection">
          <div className="contactToday">
            <span>
              <h4 contacth4> 🏠 List your Show</h4>
            </span>
            <span>
              <p className="contactP">
                Got a show, event, activity or a great experience? Partner with
                us &amp; get listed on BookMyShow
              </p>
            </span>
            <span>
              <button className="contactBtn">Contact Today</button>
            </span>
          </div>
        </section>
        <footer id="footer">
          <div id="foooterIconBar">
            <div id="customerCare">
              <img
                src="https://library.kissclipart.com/20180912/wjq/kissclipart-customer-services-icon-clipart-customer-service-ca-55a1d16250a29475.png"
                height="60px"
                width="60px"
              />
              <p>24/7 CUSTOMER CARE</p>
            </div>
            <div>
              <img
                src="https://static.thenounproject.com/png/210570-200.png"
                height="60px"
                width="60px"
              />
              <p>RESEND BOOKING CONFIRMATION</p>
            </div>
            <div>
              <img
                src="https://www.netclipart.com/pp/m/31-313150_letter-send-inbox-newsletter-svg-png-icon-email.png"
                height="60px"
                width="60px"
              />
              <p>SUBSCRIBE TO THE NEWSLETTER</p>
            </div>
          </div>
          <div className="footerTop">
            <p>
              Online Movie Ticket Booking Mumbai|Online Movie Ticket Booking
              Delhi|Online Movie Ticket Booking Bengaluru |Online Movie Ticket
              Booking Hyderabad|Online Movie Ticket Booking Chennai| Online
              Movie Ticket Booking Kolkata|Online Movie Ticket Booking
              Noida|Online Movie Ticket Booking Ahmedabad|Online Movie Ticket
              Booking Pune
            </p>
          </div>
          <div className="footer">
            <div className="contentList widthFooter firstCol">
              <h4>BEST LANGUAGE GENRE MOVIES</h4>
              <p>
                Hindi Comedy Movies |<br />
                Hindi Action Movies |<br />
                English Animated Movies |<br />
                English Fantasy Movies |<br />
                English Comedy Movies |<br />
                English Action Movies |<br />
                Tamil Action Movies |<br />
                Tamil Comedy Movies |<br />
                Telugu Action Movies |<br />
                Gujarati Comedy Movies |<br />
                Marathi Drama Movies |<br />
                Marathi Comedy Movies |<br />
                Hindi Animated Movies
              </p>
            </div>
            <div className="contentList widthFooter">
              <h4>MOVIES BY GENRE</h4>
              <p>
                Best Action Movies |<br />
                Best Romantic Movies |<br />
                Best Comedy Movies |<br />
                Best Adult Movies |<br />
                Best Adventure Movies |<br />
                Best Biography Movies |<br />
                Best Classic Movies |<br />
                Best Crime Movies |<br />
                Best Drama Movies |<br />
                Best Family Movies |<br />
                Best Fantasy Movies |<br />
                Best History Movies |<br />
                Best Musical Movies |<br />
                Best Mystery Movies |<br />
                Best Sci-Fi Movies |<br />
                Best Suspense Movies |<br />
                Best Thriller Movies |<br />
                Best Western Movies
              </p>
            </div>
            <div className="contentList widthFooter">
              <h4>POPULAR MOVIES BY LANGUAGE</h4>
              <p>
                Popular Hindi Movies |<br />
                Popular English Movies |<br />
                Popular Marathi Movies |<br />
                Popular Bengali Movies |<br />
                Popular Tamil Movies |<br />
                Popular Telugu Movies |<br />
                Popular Malayalam Movies |<br />
                Popular Bhojpuri Movies |<br />
                Popular Kannada Movies |<br />
                Popular Punjabi Movies |<br />
                Popular Gujarati Movies |<br />
                Popular Sindhi Movies
              </p>
            </div>
            <div className="contentList widthFooter">
              <h4>MOVIE REVIEWS</h4>
              <p>
                Trending Articles |<br />
                Latest News on Movies, Events, Plays &amp; Sports |<br />
                Rajeev Masand Movie Reviews |<br />
                Anupama Chopra Movie Review |<br />
                Film Reviews |<br />
                Guest Blogging
              </p>
            </div>
          </div>
          <div className="footer">
            <div className="contentList widthFooter firstCol">
              <h4>THINGS TO DO</h4>
              <p>
                Adventure Activities |<br />
                Food Events |<br />
                Family Tours |<br />
                Amusement Parks |<br />
                Gaming Events |<br />
                Nightlife Events |<br />
                Places To Visit |<br />
                Tourist Attractions
              </p>
            </div>
            <div className="contentList widthFooter">
              <h4>EVENTS TICKETS BOOKING ONLINE</h4>
              <p>
                Upcoming Events in Mumbai |<br />
                Upcoming Events in Delhi |<br />
                Upcoming Events in Bengaluru |<br />
                Upcoming Events in Chennai |<br />
                Upcoming Events in Hyderabad |<br />
                Upcoming Events in Pune |<br />
                Upcoming Events in Noida |<br />
                Upcoming Events in Ahmedabad
              </p>
            </div>
            <div className="contentList widthFooter">
              <h4> MOVIES, CINEMAS &amp; CELEBRITY</h4>
              <p>
                Latest Upcoming Movies |<br />
                Best Now Showing Movies |<br />
                Cinemas &amp; Theatres |<br />
                Movie Stars &amp; Celebrities |<br />
                Cinema Chains |<br />
                All regions Cinemas
              </p>
            </div>
            <div className="contentList widthFooter">
              <h4>ARCHIVED COLLECTION</h4>
              <p>
                Old Movies |<br />
                Past Events |<br />
                Classic Sports Events |<br />
                Old Theatre Plays |<br />
                Best Movies 2016 |<br />
                Best Movies 2017 |<br />
                Best Movies 2018
              </p>
            </div>
          </div>
          <div className="footer">
            <div className="contentList widthFooter firstCol">
              <h4> BOOKMYSHOW APP</h4>
              <p>
                BMS Ticketing iOS App |<br />
                BMS Ticketing Android App
              </p>
            </div>
            <div className="contentList widthFooter">
              <h4>BOOKMYSHOW NEWS</h4>
              <p>
                Buzz |<br />
                Press Release |<br />
                Press Coverage |<br />
                Current Openings |<br />
                Contact Us |<br />
                About Us
              </p>
            </div>
            <div className="contentList widthFooter">
              <h4>EXCLUSIVES</h4>
              <p>
                BookASmile |<br />
                Superstar |<br />
                Corporate Vouchers |<br />
                Gift Cards |<br />
                My Coupons |<br />
                Box Office Collection |<br />
                Watch Guide
              </p>
            </div>
            <div className="contentList widthFooter">
              <h4>HELP</h4>
              <p>
                Sitemap |<br />
                FAQs |<br />
                Terms and Conditions |<br />
                Privacy Policy
              </p>
            </div>
          </div>
          <div id="footerLogo">
            <div style={{ width: "40%" }} className="fltLft">
              <div className="line" id="pdLft"></div>
            </div>
            <div style={{ width: "20%" }} className="fltLft">
              <img
                src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/21/w900X450/logo-on-gray.jpg?w=400&dpr=2.6"
                height="60px"
                width="100%"
              />
            </div>
            <div style={{ width: "40%" }} className="fltLft">
              <div className="line" id="pdRyt" />
            </div>
          </div>
          <div id="footerIcons">
            <div>
              <i className="fa fa-facebook-f" />
            </div>
            <div>
              <i className="fa fa-twitter" />
            </div>
            <div>
              <i className="fa fa-instagram" />
            </div>
            <div>
              <i className="fa fa-youtube" />
            </div>
            <div>
              <i className="fa fa-pinterest-p" />
            </div>
            <div>
              <i className="fa fa-linkedin" />
            </div>
          </div>
          <div id="footerPara">
            <p>
              &copy; 2024 ExcelR Project. All rights reserved. The content and
              images on this website are protected by copyright law and belong
              to their respective owners. Unauthorized use is prohibited and
              punishable by law.
            </p>
          </div>
        </footer>
      </div>
    );
  };

export default ListYourShow;
