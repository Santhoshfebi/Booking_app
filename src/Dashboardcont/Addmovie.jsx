import React from "react";
import loggg from "../Resources/bms-logo.png";

const AddMovie = () => {
  return (
    <div>
      <div className="dashnav w-screen h-24 bg-white flex overflow-hidden sticky top-0">
        <div className="dashnavlogo w-1/4 h-28   bg-white ">
          <img className="h-24" src={loggg} alt="logo" />
        </div>
        <div className="dashnavcont w-3/4 h-24  flex">
          <div className="navcontleft w-3/5 h-24  flex items-center">
            <div className="wel ">
              <h1>BookMyShow Dashboard</h1>
            </div>
          </div>
          <div className="navcontright w-2/5 h-24 flex justify-end">
            <div className="control flex items-center mr-3">
              <img
                src={loggg}
                alt=""
                className=" bg-black h-20 w-20 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="maincointainer w-screen h-screen flex">
        <div className="sidenav w-1/4 h-screen">
          <div className="control w-full h-24  flex items-center justify-center">
            <button className="  h-10 w-4/5 rounded-3xl hover:bg-gray-500 active:bg-gray-200 focus:outline-none focus:ring focus:ring-[#e7174b]">
              User
            </button>
          </div>
          <div className="control w-full h-24  flex items-center justify-center">
            <button className="  h-10 w-4/5 rounded-3xl hover:bg-gray-500 active:bg-gray-200 focus:outline-none focus:ring focus:ring-[#e7174b]">
              Movies
            </button>
          </div>
          <div className="control w-full h-24  border-grey-400 flex items-center justify-center">
            <button className=" h-10 w-4/5 rounded-3xl hover:bg-gray-500 active:bg-gray-200 focus:outline-none focus:ring focus:ring-[#e7174b]">
              Cards
            </button>
          </div>
          <div className="control w-full h-24 flex items-center justify-center">
            <button className=" h-10 w-4/5 rounded-3xl hover:bg-gray-500 active:bg-gray-200 focus:outline-none focus:ring focus:ring-[#e7174b] ">
              Offers
            </button>
          </div>
        </div>
        <div className="maincontent w-3/4 h-screen bg-slate-400">
          <div className="cot ml-3 mr-3 mt-3 mb-3 h-fit">
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Movie Name :
                </label>
                <input
                  type="text"
                  id="movieName"
                  name="movieName"
                  // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  type="text"
                  id="desc"
                  name="desc"
                  rows={"6"}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, desc: e.target.value })
                  // }
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4 flex justify-evenly">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Poster Url :
                  </label>
                  <input
                    type="text"
                    id="poster"
                    name="poster"
                    // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Imdb rating :
                  </label>
                  <input
                    type="text"
                    id="rating"
                    name="rating"
                    // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Genere :
                  </label>
                  <input
                    type="text"
                    id="genereName"
                    name="genereName"
                    // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Crew Member :
                </label>
                <input
                  type="text"
                  id="crewName"
                  name="crewName"
                  // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4"></div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Language :
                </label>
                <input
                  type="text"
                  id="language"
                  name="language"
                  // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4"></div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Cast :
                </label>
                <input
                  type="text"
                  id="castName"
                  name="castName"
                  // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
