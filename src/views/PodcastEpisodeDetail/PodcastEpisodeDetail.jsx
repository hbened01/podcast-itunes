import React, { useEffect, useState, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { EpisodeDetail, BasicCard, Loader } from "@/components";
import "./PodcastEpisodeDetail.scss";

const PodcastEpisodeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { podcastId, episodeId } = useParams();
  const { summary, dataEpisodeTrackCard, dataEpisodes } = location?.state || {summary: null, dataEpisodeTrackCard: {}, dataEpisodes: []};
  const [episode, setEpisode] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const headerLoader = useRef(null);

  useEffect(() => {
    // Return podcast and getEpisodes if not data available: 
    if (!summary && dataEpisodes.length === 0 && JSON.stringify(dataEpisodeTrackCard) === '{}') {
      navigate(`/podcastDetail/${podcastId}`);
    };
    // Save reference header loader:
    headerLoader.current = document.querySelector(".header-loader");
    // Add loading indicator:
    setIsLoading(true);
    headerLoader.current?.classList?.remove("hidden");
    setTimeout(() => {
      const getEpisode = dataEpisodes?.find(
        ({ trackId, wrapperType }) =>
          trackId.toString() === episodeId.toString() &&
          wrapperType === "podcastEpisode"
      );
      setEpisode(getEpisode);
      // Remove loading indicator:
      setIsLoading(false);
      headerLoader.current?.classList?.add("hidden");
    }, 1000);

    return () => {};
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="podcast-episode-detail-container">
          <BasicCard summary={summary} {...dataEpisodeTrackCard} />
          <EpisodeDetail {...episode} />
        </div>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default PodcastEpisodeDetail;
