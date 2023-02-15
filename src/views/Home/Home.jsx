import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Search, Loader } from "@/components";
import { Context } from "@/Contexts";
import "./Home.scss";

const Home = () => {
  const [filter, setFilter] = useState("");
  const [podcastData, setPodcastData] = useState([]);
  const [count, setCount] = useState(0);
  const home = useRef(null);
  const navigate = useNavigate();
  const context = useContext(Context);
  const { podcastDataCtx, isLoadingCtx } = context;

  const setPodcastDataState = (data) => {
    setPodcastData(data);
    setTimeout(() => setCount(home?.current?.childNodes?.length || 0), 100);
  };

  useEffect(() => {
    // SET DATA IN THE STATE:
    setPodcastDataState(podcastDataCtx?.dataListPodcasts);
  }, [podcastDataCtx]);

  // GO TO DETAIL PODCAST:
  const handleOnClickPodCast = (podcastId) => {
    navigate(`/podcastDetail/${podcastId}`);
  };

  return (
    <div className="relative">
      <Search onChange={setFilter} count={count} />
      <div ref={home} className="home-container">
        {!isLoadingCtx &&
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
              const podcastId = Number(podcast?.id?.attributes["im:id"]);
              const imageSrc = podcast["im:image"][2]?.label;
              const title = podcast["im:name"]?.label;
              return (
                <Card
                  {...{ author, podcastId, imageSrc, title }}
                  key={podcastId}
                  handleOnClickPodCast={handleOnClickPodCast}
                />
              );
            })}
        {isLoadingCtx && <Loader />}
      </div>
    </div>
  );
};

export default Home;
