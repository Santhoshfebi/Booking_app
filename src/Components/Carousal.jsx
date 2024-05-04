import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../Resources/carousal1.avif'
import img2 from '../Resources/carousal2.avif'
import img3 from '../Resources/carousal3.avif'
import img4 from '../Resources/carousal4.avif'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousal = () => {
  return (
    <>
      <Swiper
        slidesPerView={1.3}
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
        className="mySwiper my-3"
        >
        <SwiperSlide><img src={img1} className='rounded-2xl' alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} className='rounded-2xl' alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} className='rounded-2xl' alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} className='rounded-2xl' alt="" /></SwiperSlide>
      
      </Swiper>
    </>

  )
}

export default Carousal;