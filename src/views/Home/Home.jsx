import React, { useEffect } from "react";
import { getPodcastsData } from "@/services";
import { Card } from "@/components";

const Home = () => {
  useEffect(() => {
    getPodcastsData().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-10 mt-5 items-center justify-center">
        <Card />
      </div>
    </>
  );
};

export default Home;
