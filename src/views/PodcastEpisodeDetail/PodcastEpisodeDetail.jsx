import React, { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { EpisodeDetail, BasicCard, Loader } from "@/components";
import { getPodcastsDetailData } from "@/services";
import "./PodcastEpisodeDetail.scss";

const PodcastEpisodeDetail = () => {
  const location = useLocation();
  const { podcastId, episodeId } = useParams();
  const [episode, setEpisode] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const headerLoader = useRef(null);
  const [dataEpisodes, setDataEpisodes] = useState(location?.state?.dataEpisodes || []);
  const [dataPodcastTrackCard, setDataPodcastTrackCard] = useState(location?.state?.dataPodcastTrackCard || {});

  const setdataEpisodesInStates = (episode) => {
    episode?.wrapperType !== "track"
      ? setDataEpisodes((prevState) => [...prevState, episode])
      : setDataPodcastTrackCard(episode);
  };

  useEffect(() => {
    if (!location?.state) {
      getPodcastsDetailData(podcastId).then((data) => {
        const dataFetchEpisodes = JSON.parse(data?.contents);
        dataFetchEpisodes?.results?.forEach((episode) =>
          setdataEpisodesInStates(episode)
        );
      })
    }
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
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="podcast-episode-detail-container">
          <BasicCard summary={dataPodcastTrackCard?.summary?.label} {...dataPodcastTrackCard} />
          <EpisodeDetail {...episode} />
        </div>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default PodcastEpisodeDetail;
