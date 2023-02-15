import React, { useEffect, useState, useRef } from "react";
import { addHours, getTime } from "date-fns";
import { Header } from "@/components";
import Routes from "@/routes/Routes";
import { getPodcastsData } from "@/services";
import { Context } from "@/Contexts";
import "./PodcastItunes.scss";

const PodcastItunes = () => {
  const [podcastDataCtx, setPodcastDataCtx] = useState([]);
  const [isLoadingCtx, setIsLoadingCtx] = useState(false);
  const headerLoader = useRef(null);
  const podcastDataListStorage = useRef(null);
  podcastDataListStorage.current = JSON.parse(
    window.localStorage.getItem("DATA_PODCASTS_HOME")
  );

  useEffect(() => {
    // Save reference header loader:
    headerLoader.current = document.querySelector(".header-loader");
    // Add loading indicator:
    setIsLoadingCtx(true);
    headerLoader.current?.classList?.remove("hidden");
    // Get data list podcaster:
    if (
      getTime(new Date()) > podcastDataListStorage.current?.dateControl ||
      !podcastDataListStorage.current?.dataListPodcasts
    ) {
      setTimeout(() => {
        getPodcastsData()
          .then((data) => {
            const dataFetchPodcaster = JSON.parse(data?.contents)?.feed?.entry;
            const dateControlApiTime = getTime(addHours(new Date(), 24)); // CONTROL API TIME 24 HRS.
            const dataStorage = {
              dateControl: dateControlApiTime,
              dataListPodcasts: dataFetchPodcaster,
            };
            // SET DATA IN LOCALSTORAGE:
            window.localStorage.setItem(
              "DATA_PODCASTS_HOME",
              JSON.stringify(dataStorage)
            );
            // SET DATA IN THE STATE:
            setPodcastDataCtx(dataStorage);
          })
          .catch((error) => console.log(error))
          .finally(() => {
            setIsLoadingCtx(false);
            headerLoader.current?.classList?.add("hidden");
          });
      }, 500);
      return;
    }
    setTimeout(() => {
      setPodcastDataCtx(podcastDataListStorage.current);
      setIsLoadingCtx(false);
      headerLoader.current?.classList?.add("hidden");
    }, 500);
  }, []);

  return (
    <>
      <section className="podcast-container">
        <Context.Provider
          value={{
            podcastDataCtx,
            setPodcastDataCtx,
            isLoadingCtx,
            setIsLoadingCtx,
          }}
        >
          <Header />
          <Routes />
        </Context.Provider>
      </section>
    </>
  );
};

export default PodcastItunes;
