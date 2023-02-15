import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { EpisodeDetail, BasicCard, Loader } from "@/components";
import { getPodcastsDetailData } from "@/services";
import { Context } from "@/Contexts";
import "./PodcastEpisodeDetail.scss";

const PodcastEpisodeDetail = () => {
  const context = useContext(Context);
  const location = useLocation();
  const { podcastId, episodeId } = useParams();
  const [episode, setEpisode] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const headerLoader = useRef(null);
  const podcastDataStorage = useRef(null);
  const [summary, setSummary] = useState(location?.state?.summary || "");
  const [dataEpisodes, setDataEpisodes] = useState(location?.state?.dataEpisodes || []);
  const [dataPodcastTrackCard, setDataPodcastTrackCard] = useState(location?.state?.dataPodcastTrackCard || {});
  const { podcastDataCtx } = context;

  // Get specific podcast from list: 
  podcastDataStorage.current = podcastDataCtx?.dataListPodcasts?.find(
    (podcast) => podcast?.id?.attributes["im:id"] === podcastId
  );

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
      .catch((error) => console.log(error));
    }
  }, [podcastId, location?.state]);

  useEffect(() => {
    // Set Summary if exists:
    podcastDataStorage.current &&
      setSummary(podcastDataStorage.current?.summary?.label);
    // Save reference header loader:
    headerLoader.current = document.querySelector(".header-loader");
    // Add loading indicator:
    setIsLoading(true);
    headerLoader.current?.classList?.remove("hidden");
    // Set detail episode:
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
    }, 500);
  }, [dataPodcastTrackCard, dataEpisodes, episodeId])
  

  return (
    <>
      {!isLoading && (
        <div className="podcast-episode-detail-container">
          <BasicCard summary={summary} {...dataPodcastTrackCard} />
          <EpisodeDetail {...episode} />
        </div>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default PodcastEpisodeDetail;
