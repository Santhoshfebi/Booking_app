

import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
// import Corporates from './Corporates';
// import MovieCarousal from '../Components/MovieCarousal';
// import CardCarousal from '../Components/CardCarousal';
// import Carousal from '../Components/Carousal';
// import Credit from './Credit';
// import Offers from './Offers';
import LogIn from './LogIn';
import SignIn from './SignIn';
// import GiftCard from './GiftCard'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      {/* <Corporates /> */}
      {/* <Corporates /> */}
      {/* <CardCarousal /> */}
      {/* <MovieCarousal /> */}
      {/* <Carousal /> */}
      {/* <Offers /> */}
      {/* <Credit /> */}
     {/* <GiftCard/>
     <Credit /> */}
     <SignIn />
     <LogIn />

    </>
  );
};

export default Home;
