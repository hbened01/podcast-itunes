import React from "react";
import "./BasicCard.scss";
import { randomHex } from "@/utils";

const BasicCard = ({
  collectionName,
  artworkUrl600,
  artistName,
  summary,
  genres,
}) => {
  return (
    <div className="basic-card-container">
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
    </div>
  );
};

export default BasicCard;
