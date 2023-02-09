import React from "react";
import "./Card.scss";

const Card = ({ data }) => {
  const { author, podcastId, imageSrc, title } = data;

  return (
    <>
      <div className="card-container">
        <div className="flex flex-col items-stretch">
          <img
            className="card-container_img"
            src={imageSrc}
            alt="podcast-image"
          />
          <div className="card-container_text">
            <h5 className="card-container_text_title">{title}</h5>
            <p className="card-container_text_author">
              Author: {author}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
