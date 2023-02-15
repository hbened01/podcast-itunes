import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, PodcastDetail, PodcastEpisodeDetail } from "@/views";
import { NotFound } from "@/components";

// ADD CONFIG ROUTES:
const routes = () => {
  // GET COMPONENTS FROM DIRECTORY
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast-itunes" element={<Home />} />
      <Route path="/podcast-itunes/podcastDetail/:podcastId" element={<PodcastDetail />} />
      <Route path="/podcast-itunes/podcastEpisodeDetail/:podcastId/:episodeId" element={<PodcastEpisodeDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default routes;
