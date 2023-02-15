import * as React from "react";
import PodcastEpisodeDetail from "./PodcastEpisodeDetail";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

describe("Home Tests", () => {
  it("if loader activate", () => {
    render(
      <Router>
        <PodcastEpisodeDetail />
      </Router>
    );
    // screen.debug();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});