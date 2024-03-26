
import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import MovieCarousal from '../Components/MovieCarousal';
import CardCarousal from '../Components/CardCarousal';
import Carousal from '../Components/Carousal';
// import Credit from './Credit';
// import Offers from './Offers';

import Credit from './Credit'
import GiftCard from './GiftCard'
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CardCarousal />
      <MovieCarousal />
      <Carousal />
      {/* <Offers /> */}
      {/* <Credit /> */}
     <GiftCard/>
     <Credit />
    </>
  );
};

export default Home;
