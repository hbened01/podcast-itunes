import React, { useEffect, useState } from "react";
import { getPodcastsData } from "@/services";
import { Card } from "@/components";

const Home = () => {
  const [podcastData, setPodcastData] = useState([]);
  useEffect(() => {
    getPodcastsData().then((data) => {
      setPodcastData(data?.feed?.entry);
    });
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-10 mt-5 items-center justify-center">
        {podcastData.length > 0 &&
          podcastData?.map((podcast) => {
            const author = podcast["im:artist"].label;
            const podcastId = podcast.id.attributes["im:id"];
            const imageSrc = podcast["im:image"][2].label;
            const title = podcast["im:name"].label;
            return (
              <Card
                data={{ author, podcastId, imageSrc, title }}
                key={podcastId}
              />
            );
          })}
      </div>
    </>
  );
};

export default Home;
