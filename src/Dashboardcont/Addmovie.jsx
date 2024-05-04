
  import React, { useState } from "react";
  import axios from "axios";

  const AddMovie = () => {
    // Define state variables
    const [formData, setFormData] = useState({
      moviename: '',
      description: '',
      genre: '', // Corrected field name
      language: '',
      url: '',
      cast: '',
      bgposter: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    // Function to handle form input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Send POST request to add movie
        const response = await axios.post(
          "http://localhost:3001/addMovie",
          formData
        );
        console.log(response.data); // Log response from server

        // Clear form after successful submission
        setFormData({
          moviename: "",
          description: "",
          genre: '',
          url: "",
          language: "",
          cast: "",
          bgposter: "",
        });
        // Show success message
        setSuccessMessage('Movie added successfully');
        // Hide success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } catch (error) {
        console.error("Error adding movie:", error);
        // Handle error
      }
    };

    // Render JSX
    return (
      <div>
        
        {/* Main content */}
        <div className="flex">
          {/* Side navigation */}
          
          {/* Main content */}
          <div className=" bg-slate-400">
            {/* Form container */}
            <div className="px-5 py-5">
              {/* Movie form */}
              <form onSubmit={handleSubmit}>
                {/* Movie name input */}
                <div className="mb-4">

                  <label className="block text-sm font-medium text-gray-700">
                    Movie Name :
                  </label>
                  <input
                    type="text"
                    id="movieName"
                    name="moviename"
                    id="poster"
                    name="url"
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                {/* Description input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    type="text"
                    id="desc"
                    name="description"
                    rows={"6"}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                {/* Poster URL input */}
                <div className="mb-4 flex justify-evenly">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Poster Url :
                    </label>
                    <input
                      type="text"
                      id="poster"
                      name="url"
                      onChange={handleChange}
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  {/* Genre input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Genre :
                    </label>
                    <input
                      type="text"
                      id="genreName"
                      name="genre"
                      onChange={handleChange}
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                </div>
                {/* Language input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Language :
                  </label>
                  <input
                    type="text"
                    id="language"
                    name="language"
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                {/* Cast input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Cast :
                  </label>
                  <input
                    type="text"
                    id="castName"
                    name="cast"
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                {/* bgPoster URL input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    bgposter :
                  </label>
                  <input
                    type="text"
                    id="bgposter"
                    name="bgposter"
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                {/* Submit button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* Success message */}
              {successMessage && (
                <div className="fixed bottom-10 right-10 bg-green-500 text-white p-2 rounded">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default AddMovie;
