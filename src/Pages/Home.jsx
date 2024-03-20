import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import MovieCarousal from '../Components/MovieCarousal'
// import Carousal from '../Components/Carousal'

const Home = () => {
  return (
    <>

    <Navbar />
    <Header />
    <MovieCarousal /> 
    {/* <Carousal /> */}
    </>
  )
}

export default Home