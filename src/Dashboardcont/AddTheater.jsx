import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddTheaterForm = () => {
  const [theaterName, setTheaterName] = useState('');
  const [theaterAddress, setTheaterAddress] = useState('');
  const [theaterCity, setTheaterCity] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');
  const [movieOptions, setMovieOptions] = useState([]);
  const [theaterTime, setTheaterTime] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchMovieOptions();
  }, []);

  const fetchMovieOptions = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getMovies'); // Assuming endpoint to fetch movies list
      setMovieOptions(response.data);
    } catch (error) {
      console.error('Error fetching movie options:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/addTheater', {
        theaterName,
        theaterAddress,
        theaterCity,
        selectedMovie,
        theaterTime
      });
      setSuccessMessage('Theater added successfully!');
      // Reset form fields
      setTheaterName('');
      setTheaterAddress('');
      setTheaterCity('');
      setSelectedMovie('');
      setTheaterTime('');
    } catch (error) {
      setErrorMessage('Failed to add theater. Please try again.');
      console.error('Error adding theater:', error);
    }
  };

  return (
    <div className="add-theater-form-container">
      <h2>Add Theater</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="add-theater-form">
        <div className="form-group">
          <label htmlFor="theaterName">Theater Name:</label>
          <input
            type="text"
            id="theaterName"
            value={theaterName}
            onChange={(e) => setTheaterName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="theaterAddress">Theater Address:</label>
          <input
            type="text"
            id="theaterAddress"
            value={theaterAddress}
            onChange={(e) => setTheaterAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="theaterCity">City:</label>
          <input
            type="text"
            id="theaterCity"
            value={theaterCity}
            onChange={(e) => setTheaterCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedMovie">Movie:</label>
          <select
            id="selectedMovie"
            value={selectedMovie}
            onChange={(e) => setSelectedMovie(e.target.value)}
            required
          >
            <option value="">Select Movie</option>
            {movieOptions.map(movie => (
              <option key={movie.id} value={movie.id}>{movie.title}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="theaterTime">Time:</label>
          <input
            type="text"
            id="theaterTime"
            value={theaterTime}
            onChange={(e) => setTheaterTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Theater</button>
      </form>
    </div>
  );
};

export default AddTheaterForm;
