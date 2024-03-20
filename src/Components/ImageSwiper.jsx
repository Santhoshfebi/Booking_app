import React, { useState, useEffect, useRef } from 'react';
import './ImageSwiper.css'; // Import CSS for styling

import img1 from '../Resources/carousal1.avif';
import img2 from '../Resources/carousal2.avif';
import img3 from '../Resources/carousal3.avif';

const images = [img1, img2, img3];

const ImageSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current); // Clear interval on component unmount
  }, []); // Run only on component mount

  useEffect(() => {
    // Clear interval when currentIndex changes to prevent conflicts with manual navigation
    clearInterval(intervalRef.current);
    startAutoplay();
    updateSliderPosition();
  }, [currentIndex]);

  const updateSliderPosition = () => {
    const slideWidth = document.querySelector('.carousel-slide').offsetWidth * 0.95; // Adjust slide width based on slidesPerView
    const newPosition = -currentIndex * slideWidth;
    document.querySelector('.carousel-wrapper').style.transform = `translateX(${newPosition}px)`;
  };

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change 3000 to adjust autoplay speed (milliseconds)
  };

  const handlePrevClick = () => {
    clearInterval(intervalRef.current); // Clear interval when manually navigating
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    clearInterval(intervalRef.current); // Clear interval when manually navigating
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current); // Stop autoplay when mouse enters carousel container
  };

  const handleMouseLeave = () => {
    startAutoplay(); // Resume autoplay when mouse leaves carousel container
  };

  return (
    <div className="carousel-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="carousel-wrapper">
        {images.map((imageUrl, index) => (
          <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`} style={{ width: `calc(100% / 2.3)` }}> {/* Adjust slide width based on slidesPerView */}
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrevClick}>&lt;</button>
      <button className="next" onClick={handleNextClick}>&gt;</button>
    </div>
  );
};

export default ImageSwiper;
