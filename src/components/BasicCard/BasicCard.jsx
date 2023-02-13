import React from "react";
import "./BasicCard.scss";

const BasicCard = () => {
  return (
    <div className="max-w-sm bg-white border flex flex-col items-stretch border-gray-200 rounded-lg shadow">
      <div className="px-5 pt-5">
        <img
          className="object-cover object-center rounded-lg"
          src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
          alt=""
        />
        <div className="pb-5 border-b border-gray-300"></div>
      </div>
      <div className="px-5">
        <div className="border-b border-gray-300">
          <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
        </div>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
