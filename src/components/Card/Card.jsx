import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <>
      <div className="card-container bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-stretch">
          <img
            className="object-cover rounded-lg shadow-lg self-center"
            src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
            alt="podcast-image"
          />
          <div className="p-2">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Card title
            </h5>
            <p className="text-gray-700 text-base mb-2 text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
