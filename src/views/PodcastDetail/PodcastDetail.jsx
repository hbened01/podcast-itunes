import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPodcastsDetailData } from "@/services";
import { addHours, getTime } from "date-fns";
import { BasicCard, Loader, EpisodesList } from "@/components";
import "./PodcastDetail.scss";

const PodcastDetail = () => {
  const { podcastId } = useParams();
  const navigate = useNavigate();
  const [dataEpisodes, setDataEpisodes] = useState([]);
  const [dataEpisodeTrackCard, setDataEpisodeTrackCard] = useState([]);
  const once = useRef(true); // Fix twice calls in hook useEffect.
  const [isLoading, setIsLoading] = useState(false);
  const headerLoader = useRef(null);

  let podcastsEpisodesDataStorage = JSON.parse(
    window.localStorage.getItem("DATA_PODCASTS_EPISODES")
  );

  const podcastDataStorage = JSON.parse(
    window.localStorage.getItem("DATA_PODCASTS_HOME")
  )?.dataListPodcasts?.find(
    (podcast) => podcast?.id?.attributes["im:id"] === podcastId
  );

  const { summary } = podcastDataStorage;

  const setdataEpisodesInStates = (episode) => {
    episode?.wrapperType !== "track"
      ? setDataEpisodes((prevState) => [...prevState, episode])
      : setDataEpisodeTrackCard(episode);
  };

  const handleClickEpisode = (podcastId, episodeId) => {
    navigate(`/podcastEpisodeDetail/${podcastId}/${episodeId}/`, {
      state: {
        summary: summary?.label,
        dataEpisodes,
        dataEpisodeTrackCard,
      },
    });
  };

  useEffect(() => {
    // Save reference header loader:
    headerLoader.current = document.querySelector(".header-loader");
    if (once.current) {
      once.current = false;
      // Add loading indicator:
      setIsLoading(true);
      headerLoader.current?.classList?.remove("hidden");
      // Find index of episode:
      const isMatchIndex = podcastsEpisodesDataStorage?.findIndex(
        (episode) => episode.collectionId === podcastId
      );
      if (
        !podcastsEpisodesDataStorage ||
        isMatchIndex === -1 ||
        getTime(new Date()) >
          podcastsEpisodesDataStorage[isMatchIndex]?.dateControl
      ) {
        // REMOVE COLLECTION ID BEFORE UPDATE WITH NEW INSTANCE.
        if (typeof isMatchIndex !== "undefined" && isMatchIndex !== -1) {
          podcastsEpisodesDataStorage = podcastsEpisodesDataStorage?.filter(
            (episode) => episode.collectionId !== podcastId
          );
        }
        getPodcastsDetailData(podcastId)
          .then((data) => {
            const dateControlEpisodeApiTime = getTime(addHours(new Date(), 24)); // CONTROL EPISODE API TIME 24 HRS.
            const dataFetchEpisodes = JSON.parse(data?.contents);
            const newPodcastsEpisodesDataStorage = [
              ...(podcastsEpisodesDataStorage || []),
              ...[
                {
                  dateControl: dateControlEpisodeApiTime,
                  collectionId: podcastId,
                  dataPodcastsEpisodes: dataFetchEpisodes,
                },
              ],
            ];
            // SET DATA IN LOCALSTORAGE:
            window.localStorage.setItem(
              "DATA_PODCASTS_EPISODES",
              JSON.stringify(newPodcastsEpisodesDataStorage)
            );
            // SET DATA EPISODE:
            dataFetchEpisodes?.results?.forEach((episode) =>
              setdataEpisodesInStates(episode)
            );
          })
          .catch((error) => console.log(error))
          .finally(() => {
            setIsLoading(false);
            headerLoader.current?.classList?.add("hidden");
          });
        return;
      }
      setTimeout(() => {
        // SET DATA EPISODE:
        podcastsEpisodesDataStorage[
          isMatchIndex
        ]?.dataPodcastsEpisodes?.results?.forEach((episode) =>
          setdataEpisodesInStates(episode)
        );
        setIsLoading(false);
        headerLoader.current?.classList?.add("hidden");
      }, 1000);
    }
  }, []);
  return (
    <>
      {!isLoading && (
        <div className="podcast-detail-container">
          <BasicCard summary={summary?.label} {...dataEpisodeTrackCard} />
          <EpisodesList
            dataEpisodeTrackCard={dataEpisodeTrackCard}
            dataEpisodes={dataEpisodes}
            handleClickEpisode={handleClickEpisode}
          />
        </div>
      )}
      {isLoading && <Loader />}
    </>
  );
};
export default PodcastDetail;
