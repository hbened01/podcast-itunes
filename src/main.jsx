import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import PodcastItunes from "./PodcastItunes";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";

ReactDOM.createRoot(document.getElementById("podcaster")).render(
  <BrowserRouter>
    <StrictMode>
      <PodcastItunes />
    </StrictMode>
  </BrowserRouter>
);
