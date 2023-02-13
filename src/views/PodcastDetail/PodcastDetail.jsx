import React, { useEffect, useState, useRef } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { getPodcastsDetailData } from "@/services";
import { addHours, getTime } from "date-fns";

const PodcastDetail = () => {
  const { id } = useParams();
  const [dataEpisode, setDataEpisode] = useState([]);
  const once = useRef(true); // Fix twice calls in hook useEffect.

  let podcastsEpisodesDataStorage = JSON.parse(
    window.localStorage.getItem("DATA_PODCASTS_EPISODES")
  );

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
            setDataEpisode(dataFetchEpisodes);
          })
          .catch((error) => console.log(error));
        return;
      }
      // SET DATA EPISODE:
      setDataEpisode(
        podcastsEpisodesDataStorage[isMatchIndex].dataPodcastsEpisode
      );
    }
  }, []);
  return <>
    This is a simple PodcastDetail component {id}
  </>;
};

export default PodcastDetail;
