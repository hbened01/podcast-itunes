import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search-container">
      <label
        htmlFor="search"
        className="search-container_label"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BsSearch className="w-5 h-5 text-gray-500 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]" />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
          placeholder="Search"
          required
        />
      </div>
    </div>
  );
};

export default Search;
