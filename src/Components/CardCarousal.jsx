import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

const CardCarousal = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getMoviesInfo');
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Error fetching movies');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
  };

  const containerStyle = {
    width: '95%',
    height: '400px',
    margin: '0 auto',
    outline: "none", 
    border: "none",
  };

  return (
    <div className="slider-container" style={containerStyle}>
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.movieid} className="px-5">
            <Link to={`/movie/${movie.movieid}`}>
              <img src={movie.url} alt={movie.moviename} className="slider-image" />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardCarousal;
