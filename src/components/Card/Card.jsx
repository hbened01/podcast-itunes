import React from "react";
import PropTypes from 'prop-types';
import "./Card.scss";

const Card = ({ author, podcastId, imageSrc, title, handleOnClickPodCast }) => {

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

Card.propTypes = {
  author: PropTypes.string,
  podcastId: PropTypes.number,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  handleOnClickPodCast: PropTypes.func,
};

export default Card;
