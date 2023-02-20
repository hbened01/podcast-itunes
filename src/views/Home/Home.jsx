import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Search, Loader } from "@/components";
import { Context } from "@/Contexts";
import "./Home.scss";

const Home = () => {
  const [filter, setFilter] = useState("");
  const [podcastData, setPodcastData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const home = useRef(null);
  const navigate = useNavigate();
  const context = useContext(Context);
  const { podcastDataCtx, isLoadingCtx } = context;
  
  // GO TO DETAIL PODCAST:
  const handleOnClickPodCast = (podcastId) => {
    navigate(`/podcast-itunes/podcastDetail/${podcastId}`);
  };

  useEffect(() => {
    // SET DATA IN THE STATE:
    setPodcastData(podcastDataCtx?.dataListPodcasts);

    // SET FILTER DATA IN THE STATE:
    setFilterData(
      podcastData?.filter((podcast) => {
        const author = podcast["im:artist"]?.label.toLowerCase();
        const title = podcast["im:name"]?.label.toLowerCase();
        if (filter === "") return true;
        if (author.includes(filter) || title.includes(filter)) return true;
        return false;
      })
    );
  }, [isLoadingCtx, podcastDataCtx, filter, podcastData]);

  return (
    <div className="relative">
      <Search onChange={setFilter} count={filterData?.length} />
      <div ref={home} className="home-container" data-testid="home-container">
        {!isLoadingCtx &&
          filterData?.map((podcast) => {
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
