import React from "react";
import { FaPodcast } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";

const Header = () => {
  return (
    <header role="heading" aria-level="1" className="flex items-center px-4 py-2 bg-gray-400 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
      <FaPodcast className="text-gray-100 text-xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]" />
      <Link to={"/podcast-itunes"} className="mx-auto text-xl text-gray-100 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] hover:text-gray-200 cursor-pointer">Itunes Podcaster</Link>
      <BiLoaderAlt className="header-loader hidden animate-spin h-5 w-5" />
    </header>
  );
};

export default Header;
