import React from "react";
import { FaPodcast } from "react-icons/fa";

const Header = () => {
  return (
    <header role="heading" className="flex items-center px-4 py-2 bg-gray-600 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
      <FaPodcast className="text-gray-100 text-xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]" />
      <strong className="mx-auto text-xl text-gray-100 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] hover:text-gray-200 cursor-pointer">Itunes Podcaster</strong>
    </header>
  );
};

export default Header;
