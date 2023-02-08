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
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/podcastDetail/:id" element={<PodcastDetail />} />
        <Route
          path="/podcastEpisodeDetail/:id"
          element={<PodcastEpisodeDetail />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
