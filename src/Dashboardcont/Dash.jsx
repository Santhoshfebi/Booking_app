// Dash.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import loggg from "../Resources/bms-logo.png";
import AddMovie from './AddMovie'; // Import the AddMovie component
import AddTheater from './AddTheater'; // Import the AddTheater component

const Dash = () => {
  const [showAddMovie, setShowAddMovie] = useState(false); // State to manage whether to show AddMovie component
  const [showAddTheater, setShowAddTheater] = useState(false); // State to manage whether to show AddTheater component

  const handleAddMovieClick = () => {
    setShowAddMovie(true); // Set showAddMovie to true when Add Movie button is clicked
    setShowAddTheater(false); // Set showAddTheater to false to hide AddTheater component
  };

  const handleAddTheaterClick = () => {
    setShowAddTheater(true); // Set showAddTheater to true when Add Theater button is clicked
    setShowAddMovie(false); // Set showAddMovie to false to hide AddMovie component
  };

  return (
    <div>
      <div className="bg-white flex overflow-hidden sticky top-0">
        <div className=" bg-white ">
          <img className="h-24" src={loggg} alt="logo" />
        </div>
        <div className="dashnavcont  h-24  flex">
          <div className="navcontleft  h-24  flex items-center">
            <div className="wel ">
              <h1>BookMyShow Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-32 border-2 items-center justify-center">
          <div className="  h-24  flex items-center justify-center">
            {/* Use onClick to handle the Add Movie button click */}
            <button onClick={handleAddMovieClick} className="h-10 w-4/5 rounded-3xl hover:bg-gray-500 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-500">
              Add Movie

     
            </button>
          </div>
          <div className="control w-full h-24  border-grey-400 flex items-center justify-center">
            {/* Use onClick to handle the Add Theater button click */}
            <button onClick={handleAddTheaterClick} className=" h-10 w-4/5 rounded-3xl hover:bg-gray-500 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-500">
              Add Theater
            </button>
          </div>
          <div className="control w-full h-24 flex items-center justify-center">
            <button className=" h-10 w-4/5 rounded-3xl hover:bg-gray-500 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-500">
              Manage
            </button>
          </div>
        </div>
        {/* Conditional rendering: Render AddMovie component if showAddMovie is true */}
        <div className="container">
          {showAddMovie && <AddMovie />}
          {showAddTheater && <AddTheater />}
        </div>
      </div>
    </div>
  );
};

export default Dash;
