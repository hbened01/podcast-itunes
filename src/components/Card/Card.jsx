import React from "react";
import "./Card.scss";

const Card = ({ data, handleOnClickPodCast }) => {
  const { author, podcastId, imageSrc, title } = data;

  return (
    <>
      <div className="card-container" onClick={() => handleOnClickPodCast(podcastId)}>
        <div className="flex flex-col items-stretch">
          <img
            className="card-container_img"
            src={imageSrc}
            alt={podcastId}
          />
          <div className="card-container_text">
            <h5 className="card-container_text_title">{title}</h5>
            <p className="card-container_text_author">
              <span className="underline underline-offset-2">Author</span>: {author}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
