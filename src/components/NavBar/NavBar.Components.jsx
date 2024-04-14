import axios from "axios";
import React, { useState } from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    fetchResults(query);
  };

  const fetchResults = (query) => {
    axios
      .get(
        `search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex w-full items-center justify-between bg-darkBackground-700 px-2">
      <div className="flex w-full md:w-1/3 gap-3 items-center">
        <a href="/" className="w-20 h-14 px-3 ">
          <img
            src="/cinema.png"
            alt="Logo"
            className="w-full h-full rounded-md content-around"
          />
        </a>

        <div className="w-full h-8 flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
          <div className="relative w-full">
            <input
              type="search"
              value={searchQuery}
              onChange={handleInputChange}
              className="bg-transparent w-full text-gray-800 border-b border-gray-400 focus:outline-none"
              placeholder="Search for movies.."
            />
            {searchResults.length > 0 && (
              <div className="absolute top-full flex flex-col bg-white w-full max-h-60 border border-gray-400 mt-1 rounded-md z-50 overflow-y-auto">
                {searchResults.map((result) => (
                  <Link
                    to={`/movie/${result.id}`}
                    key={result.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {result.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-3">
        <Link to="/plays">
          <span className="text-gray-400 text-base flex items-center cursor-pointer hover:text-white">
            Plays
          </span>
        </Link>

        <span className="text-gray-400 text-base flex items-center cursor-pointer hover:text-white">
          Batticaloa <BiChevronDown />
        </span>
        <div className="w-8 h-8 text-white cursor-pointer">
          <BiMenu className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
