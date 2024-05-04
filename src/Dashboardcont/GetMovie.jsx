import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Dashboardcont/GetMovie.css'; // Import CSS for slider styling

const GetMovie = () => {
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

  return (
    <div className="movies-container">
      <h1>Recommended Movies</h1>
      <div className="slider">
        <div className="slider-content">
          {movies.map(movie => (
            <Link to={`/movie/${movie.movieid}`} key={movie.movieid}>
              <img src={movie.url} alt={movie.moviename} className="slider-image" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetMovie;
