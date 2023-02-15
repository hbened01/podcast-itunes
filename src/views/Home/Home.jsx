import React, { useEffect, useState, useRef } from "react";
import { getPodcastsData } from "@/services";
import { Card, Search, Loader } from "@/components";
import { addHours, getTime } from "date-fns";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const [filter, setFilter] = useState("");
  const [podcastData, setPodcastData] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const home = useRef(null);
  const headerLoader = useRef(null);
  const navigate = useNavigate();
  const podcastDataListStorage = useRef(null);

  const setPodcastDataState = (data) => {
    setPodcastData(data);
    setTimeout(() => setCount(home?.current?.childNodes?.length || 0), 100);
  };

  podcastDataListStorage.current = JSON.parse(
    window.localStorage.getItem("DATA_PODCASTS_HOME")
  );

  useEffect(() => {
    // Save reference header loader:
    headerLoader.current = document.querySelector(".header-loader");
    // Add loading indicator:
    setIsLoading(true);
    headerLoader.current?.classList?.remove("hidden");
    if (
      getTime(new Date()) > podcastDataListStorage.current?.dateControl ||
      !podcastDataListStorage.current?.dataListPodcasts
    ) {
      setTimeout(() => {
        getPodcastsData()
          .then((data) => {
            const dataFetchPodcaster = JSON.parse(data?.contents)?.feed?.entry;
            const dateControlApiTime = getTime(addHours(new Date(), 24)); // CONTROL API TIME 24 HRS.
            // SET DATA IN THE STATE:
            setPodcastDataState(dataFetchPodcaster);
            // SET DATA IN LOCALSTORAGE:
            window.localStorage.setItem(
              "DATA_PODCASTS_HOME",
              JSON.stringify({
                dateControl: dateControlApiTime,
                dataListPodcasts: dataFetchPodcaster,
              })
            );
          })
          .catch((error) => console.log(error))
          .finally(() => {
            setIsLoading(false);
            headerLoader.current?.classList?.add("hidden");
          });
        return;
      }, 500);
    }
    setTimeout(() => {
      // SET DATA IN THE STATE:
      setPodcastDataState(podcastDataListStorage.current?.dataListPodcasts);
      setIsLoading(false);
      headerLoader.current?.classList?.add("hidden");
    }, 500);
  }, [filter, podcastDataListStorage]);

  // GO TO DETAIL PODCAST:
  const handleOnClickPodCast = (podcastId) => {
    navigate(`/podcastDetail/${podcastId}`);
  };

  return (
    <div className="relative">
      <Search onChange={setFilter} count={count} />
      <div ref={home} className="home-container">
        {!isLoading &&
          podcastData
            ?.filter((podcast) => {
              const author = podcast["im:artist"]?.label.toLowerCase();
              const title = podcast["im:name"]?.label.toLowerCase();
              if (filter === "") return true;
              if (author.includes(filter) || title.includes(filter)) return true;
              return false;
            })
            .map((podcast) => {
              const author = podcast["im:artist"]?.label;
              const podcastId = podcast?.id?.attributes["im:id"];
              const imageSrc = podcast["im:image"][2]?.label;
              const title = podcast["im:name"]?.label;
              return (
                <Card
                  data={{ author, podcastId, imageSrc, title }}
                  key={podcastId}
                  handleOnClickPodCast={handleOnClickPodCast}
                />
              );
            })}
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default Home;
