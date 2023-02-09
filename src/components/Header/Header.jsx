import React from "react";
import { FaPodcast } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center px-4 py-2 bg-gray-600">
      <FaPodcast className="text-gray-100 text-xl" />
      <strong className="mx-auto text-gray-100">Itunes Podcaster</strong>
    </header>
  );
};

export default Header;
