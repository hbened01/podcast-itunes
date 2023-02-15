import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BasicCard.scss";
import { randomHex } from "@/utils";
import PropTypes from 'prop-types';

const BasicCard = ({
  collectionName,
  collectionId,
  artworkUrl600,
  artistName,
  summary,
  genres,
}) => {
  const location = useLocation();
  return (
    <Link className="basic-card-container" to={location?.pathname?.includes("podcastDetail") ? `/` : `/podcastDetail/${collectionId}`}>
      <div className="basic-card-container_img">
        <img
          src={artworkUrl600}
          alt=""
        />
        <div className="pb-5 border-b border-gray-300"></div>
      </div>
      <div className="basic-card-container_body">
        <div className="basic-card-container_body_description">
          <div className="basic-card-container_body_description_title">
            {collectionName}
          </div>
          <div className="basic-card-container_body_description_subtitle">
            By {artistName}
          </div>
        </div>
        <div className="basic-card-container_body_description_genres">
          {genres?.map((genre) => {
            return (
              <span
                key={genre}
                style={{ '--color': randomHex()}}
              >
                {genre}
              </span>
            );
          })}
        </div>
        <div className="basic-card-container_body_description_summary">{summary}</div>
      </div>
    </Link>
  );
};

BasicCard.propTypes = {
  collectionName: PropTypes.string,
  collectionId: PropTypes.number,
  artworkUrl600: PropTypes.string,
  artistName: PropTypes.string,
  summary: PropTypes.string,
  genres: PropTypes.array,
};


export default BasicCard;
