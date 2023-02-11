import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, PodcastDetail, PodcastEpisodeDetail } from "@/views";
import { NotFound } from "@/components";

// ADD CONFIG ROUTES:
const routes = () => {
  // GET COMPONENTS FROM DIRECTORY
  return (
    <BrowserRouter>
      <Routes>
        <Route name="index" path="/" element={<Home />} />
        <Route name="home" path="/home" element={<Home />} />
        <Route name="podcast-detail" path="/podcastDetail/:id" element={<PodcastDetail />} />
        <Route
          name="podcast-episode-detail"
          path="/podcastEpisodeDetail/:id"
          element={<PodcastEpisodeDetail />}
        />
        <Route name="not-found" path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
