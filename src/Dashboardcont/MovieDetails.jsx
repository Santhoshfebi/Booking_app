import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Premiere from "../Resources/premiere-tag.avif"

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Extract movie ID from URL params

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getMovie/${id}`); // Use movie ID in the URL
        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Error fetching movie details');
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]); // Make sure to include id in the dependency array

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

    return (
        <div className=' h-[480px] overflow-hidden relative flex justify-center'>
            <img src={movieDetails.bgposter} alt="" className='object-cover  w-full h-full transform scale-100' />
            <div class="absolute inset-0 bg-gradient-to-l from-transparent via-black to-black"></div>
            <div className='   absolute  top-5 h-[450px] w-[1200px] flex flex-col '>
                <div className=' w-72 absolute top-2  rounded-xl'>
                  <img src={movieDetails.url} alt="" className='object-fill rounded-xl' />
                </div>
                <div className=' left-80 relative '>
                  <div className='relative'>
                    <img src={Premiere} alt="" className='absolute  w-[85px] top-24 ' />
                    <span className='absolute rounded-xl  bg-[#1F253A] text-xs top-24 left-24 px-5 py-[2px] text-white'>Streaming Now</span>
                  </div>
                  <h2 className='absolute  text-white top-32 font-bold text-4xl'>{movieDetails.moviename}</h2>
                  <div className='absolute top-[190px] '>
                    <p className=' text-white'><span>{movieDetails.language}</span><span className='text-[#F84464]'>Audio(1), Subtitle(1)</span></p>
                  </div>
                  <div className='absolute top-56'>
                    {/* <p className='text-white '><span>2h 8m • Crime, Mystery, Thriller • UA • 26 May, 2023</span></p> */}
                  </div>
                <div className='absolute top-[270px] font-semibold text-white flex gap-3'>
                  <button className='px-[70px] bg-[#f84464] py-3  rounded-md'>Book Now</button>
                </div>
                </div>
                <div></div>
            </div>
        </div>
      )
}

export default MovieDetails;
