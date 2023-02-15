import React from "react";
import PropTypes from 'prop-types';
import { BsSearch } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";
import "./Search.scss";

const Search = ({ onChange, count }) => {
  return (
    <div className="search-container">
      <div className="relative">
        <span className="absolute -left-20 top-4 text-lg py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded">
          {count ? count : <BiLoaderAlt className="animate-spin h-5 w-5" />}
        </span>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BsSearch className="w-5 h-5 text-gray-500 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]" />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
          placeholder="Search Podcasts..."
          onChange={(e) => onChange(e?.target?.value?.toLowerCase() || "")}
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  count: PropTypes.number,
  onChange: PropTypes.func,
};

export default Search;
