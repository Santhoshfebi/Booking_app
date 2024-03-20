import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import AazamBannerCard from '../SingleCards/AazamBannerCard';
import AnyoneButYouBannerCard from '../SingleCards/AnyoneButYouBannerCard';
import OppenHaimerBannerCard from '../SingleCards/OppenHaimerBannerCard';
import DuneBannerCard from '../SingleCards/DuneBannerCard';
import GetOutBannerCard from '../SingleCards/GetOutBannerCard';
import MuzzleBannerCard from '../SingleCards/MuzzleBannerCard';
import DinosaursBannerCard from '../SingleCards/DinosaursBannerCard';


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
      <SwiperSlide><OppenHaimerBannerCard /></SwiperSlide>
      <SwiperSlide><DuneBannerCard /> </SwiperSlide>
      <SwiperSlide><GetOutBannerCard /> </SwiperSlide>
      <SwiperSlide><MuzzleBannerCard /> </SwiperSlide>
      <SwiperSlide><DinosaursBannerCard /> </SwiperSlide>
    
    </Swiper>
  </>
  )
}

export default MovieCarousal