import React, { useEffect, useState, useRef } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { getPodcastsDetailData } from "@/services";
import { addHours, getTime } from "date-fns";
import { BasicCard, Loader } from "@/components";
import "./PodcastDetail.scss";

const PodcastDetail = () => {
  const { id } = useParams();
  const [dataEpisodes, setDataEpisodes] = useState([]);
  const [dataEpisodeTrackCard, setDataEpisodeTrackCard] = useState([]);
  const once = useRef(true); // Fix twice calls in hook useEffect.

  let podcastsEpisodesDataStorage = JSON.parse(
    window.localStorage.getItem("DATA_PODCASTS_EPISODES")
  );

  const podcastDataStorage = JSON.parse(
    window.localStorage.getItem("DATA_PODCASTS_HOME")
  )?.dataListPodcasts?.find(
    (podcast) => podcast?.id?.attributes["im:id"] === id
  );

  const { summary } = podcastDataStorage;
  console.log(summary.label);

  const setdataEpisodesInStates = (episode) => {
    episode?.wrapperType !== "track"
      ? setDataEpisodes((prevState) => [...prevState, episode])
      : setDataEpisodeTrackCard(episode);
  };

  useEffect(() => {
    if (once.current) {
      once.current = false;
      const isMatchIndex = podcastsEpisodesDataStorage?.findIndex(
        (episode) => episode.collectionId === id
      );
      if (
        !podcastsEpisodesDataStorage ||
        isMatchIndex === -1 ||
        getTime(new Date()) >
          podcastsEpisodesDataStorage[isMatchIndex]?.dateControl
      ) {
        // REMOVE COLLECTION ID BEFORE UPDATE WITH NEW INSTANCE.
        podcastsEpisodesDataStorage = podcastsEpisodesDataStorage.filter(
          (episode) => episode.collectionId !== id
        );
        getPodcastsDetailData(id)
          .then((data) => {
            const dateControlEpisodeApiTime = getTime(addHours(new Date(), 24)); // CONTROL EPISODE API TIME 24 HRS.
            const dataFetchEpisodes = JSON.parse(data?.contents);
            const newPodcastsEpisodesDataStorage = [
              ...(podcastsEpisodesDataStorage || []),
              ...[
                {
                  dateControl: dateControlEpisodeApiTime,
                  collectionId: id,
                  dataPodcastsEpisode: dataFetchEpisodes,
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
          .catch((error) => console.log(error));
        return;
      }
      // SET DATA EPISODE:
      podcastsEpisodesDataStorage[
        isMatchIndex
      ]?.dataPodcastsEpisode?.results?.forEach((episode) =>
        setdataEpisodesInStates(episode)
      );
    }
  }, []);
  return (
    <div className="podcast-detail-container">
      <BasicCard summary={summary.label} {...dataEpisodeTrackCard} />
    </div>
  );
};

export default PodcastDetail;
