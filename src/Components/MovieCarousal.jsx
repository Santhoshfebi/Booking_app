import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import AazamBannerCard from '../SingleCards/AazamBannerCard';
import AnyoneButYouBannerCard from '../SingleCards/AnyoneButYouBannerCard';


const MovieCarousal = () => {
  return (
    <>
    <Swiper
    
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      initialSlide={0}
      loop={true}
      className="mySwiper"
      >
      <SwiperSlide><AazamBannerCard /></SwiperSlide>
      <SwiperSlide><AnyoneButYouBannerCard /></SwiperSlide>
      {/* <SwiperSlide><img src={img3} className='rounded-2xl' alt="" /></SwiperSlide>
      <SwiperSlide><img src={img4} className='rounded-2xl' alt="" /></SwiperSlide> */}
    
    </Swiper>
  </>
  )
}

export default MovieCarousal