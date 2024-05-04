
import React, { useEffect } from 'react';
// // import Payment from "./Payment";
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Carousal from '../Components/Carousal';
import CardCarousal from '../Components/CardCarousal';
import Footer from "../Components/Footer";

const Home = () => {
  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (!userRole) {
      // Redirect to login page if user role is not present
      window.location.href = '/signin';
    }
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <Carousal />
      <CardCarousal />
      <Footer />

    </>
  );
};

export default Home;
