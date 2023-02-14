import React, { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { BasicCard, Loader } from "@/components";
import "./PodcastEpisodeDetail.scss";

const PodcastEpisodeDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { summary, dataEpisodeTrackCard, dataEpisodes } = location?.state;
  const [episode, setEpisode] = useState({});
  const test = (e) => { console.log(e)};

  useEffect(() => {
    const getEpisode = dataEpisodes?.find(
      ({ trackId, wrapperType }) =>
        trackId.toString() === id.toString() && wrapperType === "podcastEpisode"
    );
    setEpisode(getEpisode);

    return () => {};
  }, []);

  return (
    <div className="podcast-episode-detail-container">
      <BasicCard summary={summary} {...dataEpisodeTrackCard} />
      <audio src={episode.episodeUrl} onDurationChange={test} controls />
    </div>
  );
};

export default PodcastEpisodeDetail;
