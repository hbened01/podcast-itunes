import { render, screen } from "@testing-library/react";
import EpisodeDetail from "./EpisodeDetail";
import { MemoryRouter as Router } from "react-router-dom";

describe("EpisodeDetail", () => {
  it("renders props validation", () => {
    render(
      <Router>
        <EpisodeDetail
          {...{
            episodeUrl:
              "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_602.mp3?dest-id=2422538",
            description:
              "Friend of the Show and Colts Linebacker Zaire Franklin returns to the JBP as the gang starts by recapping the Chiefs/Eagles Super Bowl (20:31) before turning their attention to Rihanna’s halftime performance (47:20). Floyd Mayweather Jr. has agreed to an exhibition boxing match (1:30:28), everyone shares their thoughts on the red boots (1:38:15), and have the aliens arrived on earth (1:44:00)? Also, a train derailment in Ohio has caused an environmental disaster (1:52:55), Rest in Peace to Dave ...",
            releaseDate: "2023-02-15T08:30:00Z",
            trackName: 'Episode 602 | "The Honey Pack"',
            trackTimeMillis: 11029000,
          }}
        />
      </Router>
    );
    // screen.debug();
    expect(
      screen.getByText(`Episode 602 | "The Honey Pack"`)
    ).toBeInTheDocument();
    expect(screen.getByTestId("audio")).toBeInTheDocument();
    const audioElement = document.querySelector('[data-testid="audio"]');
    expect(audioElement).toHaveAttribute(
      "src",
      "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_602.mp3?dest-id=2422538"
    );
  });
});
