
import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Corporates from "./Corporates";
import Offers from "./Offers";
import CardCarousal from "../Components/CardCarousal";
import MovieCarousal from "../Components/MovieCarousal";
import Carousal from "../Components/Carousal";
import Credit from "./Credit";
import GiftCard from './GiftCard'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Corporates />
      <CardCarousal />
      <MovieCarousal />
      <Carousal />
      <Offers />
     <GiftCard/>
     <Credit />

    </>
  );
};

export default Home;
