import React from "react";
// import Payment from "./Payment";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import AddMovie from "../Dashboardcont/Addmovie";
import Userinfo from "../Dashboardcont/Userinfo";
// import Corporates from './Corporates';
// import MovieCarousal from '../Components/MovieCarousal';
// import CardCarousal from '../Components/CardCarousal';
// import Carousal from '../Components/Carousal';
// import Credit from './Credit';
// import Offers from './Offers';
import Registration from "./Registration";
// import SignIn from './SignIn';
// import GiftCard from './GiftCard'
// import SideMenu from "./SideMenu";
// import Dash from "../Dashboardcont/Dash";
// import BuyTickets from "./BuyTickets";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      {/* <Corporates /> */}
      {/* <CardCarousal /> */}
      {/* <MovieCarousal /> */}
      {/* <Carousal /> */}
      {/* <Offers /> */}
      {/* <Credit /> */}
      {/* <GiftCard /> */}
      {/* <SignIn /> */}
      <Registration />
      {/* <SideMenu /> */}
      {/* <Dash /> */}
      {/* <Payment /> */}
      {/* <BuyTickets /> */}
      <AddMovie />
      <Userinfo />
    </>
  );
};

export default Home;
