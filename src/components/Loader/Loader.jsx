import React from "react";

const Loader = () => {
  return (
    <div
      className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 space-x-2 animate-pulse"
    >
      <div
        className="spinner-grow inline-block w-8 h-8 bg-current rounded-full text-blue-600"
        role="status"
      ></div>
      <div
        className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full
        text-purple-500
      "
        role="status"
      ></div>
      <div
        className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full
        text-green-500
      "
        role="status"
      ></div>
      <div
        className="spinner-grow inline-block w-8 h-8 bg-current rounded-full text-red-500"
        role="status"
      ></div>
      <div
        className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full
        text-yellow-500
      "
        role="status"
      ></div>
      <div
        className="spinner-grow inline-block w-8 h-8 bg-current rounded-full text-blue-300"
        role="status"
      ></div>
      <div
        className="spinner-grow inline-block w-8 h-8 bg-current rounded-full text-gray-300"
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
