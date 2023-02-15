import { render, screen } from "@testing-library/react";
import PodcastItunes from "./PodcastItunes";
import { MemoryRouter as Router } from "react-router-dom";

describe("PodcastItunes", () => {
  it("renders headline", () => {
    render(
      <Router>
        <PodcastItunes />
      </Router>
    );
    // screen.debug();
    expect(screen.getByText("Itunes Podcaster")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
