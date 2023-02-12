import React, { useEffect, useState, useRef } from "react";
import { getPodcastsData } from "@/services";
import { Card, Search, Loader } from "@/components";
import { addHours, getTime, addMinutes} from "date-fns";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const [filter, setFilter] = useState("");
  const [podcastData, setPodcastData] = useState([]);
  const [count, setCount] = useState(0);
  const home = useRef(null);
  const navigate = useNavigate();

  const setPodcastDataState = (data) => {
    setPodcastData(data);
    setTimeout(() => setCount(home?.current?.childNodes?.length || 0), 100);
  };

  useEffect(() => {
    const podcastDataListStorage = JSON.parse(
      window.localStorage.getItem("DATA_PODCASTS_HOME")
    );
    if (
      getTime(new Date()) > podcastDataListStorage?.dateControl || !podcastDataListStorage
    ) {
      setTimeout(() => {
        getPodcastsData()
          .then((data) => {
            const dataFetchPodcaster = JSON.parse(data?.contents).feed?.entry;
            const dateControlApiTime = getTime(addHours(new Date(), 24)); // CONTROL API TIME 24 HRS.
            // SET DATA IN THE STATE:
            setPodcastDataState(dataFetchPodcaster);
            // SET DATA IN LOCALSTORAGE:
            window.localStorage.setItem(
              "DATA_PODCASTS_HOME",
              JSON.stringify({
                dataListPodcasts: dataFetchPodcaster,
                dateControl: dateControlApiTime,
              })
            );
          })
          .catch((error) => console.log(error));
        return;
      }, 1000);
    }
    setTimeout(() => {
      // SET DATA IN THE STATE:
      setPodcastDataState(podcastDataListStorage?.dataListPodcasts);
    }, 1000);
  }, [filter]);

  // GO TO DETAIL PODCAST:
  const handleOnClickPodCast = (id) => {
    navigate(`/podcastDetail/${id}`);
  };

  return (
    <div className="relative">
      <Search onChange={setFilter} count={count} />
      <div ref={home} className="home-container">
        {podcastData?.length > 0 &&
          podcastData
            ?.filter((podcast) => {
              const author = podcast["im:artist"]?.label.toLowerCase();
              const title = podcast["im:name"]?.label.toLowerCase();
              if (filter === "") return true;
              if (author.includes(filter) || title.includes(filter))
                return true;
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
        {podcastData?.length === 0 && <Loader />}
      </div>
    </div>
  );
};

export default Home;
