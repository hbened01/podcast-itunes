import React from "react";
import { parseISO, format } from "date-fns";
import { CiTimer, CiCalendar } from "react-icons/ci";
import "./EpisodeDetail.scss";

const EpisodeDetail = ({
  episodeUrl,
  description,
  trackName,
  releaseDate,
  trackTimeMillis,
}) => {
  return (
    <div className="detail-episode-container">
      <div className="detail-episode-container_title">
        <span>{trackName}</span>
      </div>
      <div className="detail-episode-container_border" />
      <div className="detail-episode-container_subtitle">
        <CiTimer />
        {(trackTimeMillis / 1000 / 60).toFixed(0)} Min |
        <CiCalendar />
        {releaseDate ? format(parseISO(releaseDate), "PPPP") : ""}
      </div>
      <div className="detail-episode-container_border" />
      <p className="detail-episode-container_description">
        {description}.
      </p>
      <audio
        className="detail-episode-container_player"
        src={episodeUrl}
        controls
      />
    </div>
  );
};

export default EpisodeDetail;
