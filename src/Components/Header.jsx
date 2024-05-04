
import React from "react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    // main header
    <div className="bg-[#F5F5F5] text-center flex justify-between px-40  py-2">
      {/* left header */}
      <div>
        <ul className="flex items-center justify-center gap-4 text-sm">
          <li>Movies</li>
          <li>Stream</li>
          <li>Events</li>
          <li>Plays</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>
      </div>

      {/* right header */}

      <div className="ml-20">
        <ul className="flex items-center justify-center gap-4 text-xs">
          <li>
            {/* <a
              href="/ListYourShow"
              className="text-black-500 hover:underline"
              style={{ textDecoration: "none" }}
            >
              <span className="show-link-text hover:underline">
                ListYourShow
              </span>
            </a> */}
            <Link
              to="/ListYourShow"
              className="text-black-500 hover:underline decoration-0"
            >
              ListYourShow
            </Link>
          </li>

          <li>Corporates</li>
          <li>
            <Link to={"../Components/"}>Offers</Link>{" "}
          </li>
          <li>Gift Cards</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
