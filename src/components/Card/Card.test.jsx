import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { MemoryRouter as Router } from "react-router-dom";

describe("Card", () => {
  it("renders props validation", () => {
    render(
      <Router>
        <Card
          {...{
            author: "The Joe Budden Network",
            podcastId: 1535809341,
            imageSrc:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
            title: "The Joe Budden Podcast",
            handleOnClickPodCast: () => {},
          }}
        />
      </Router>
    );
    // screen.debug();
    expect(screen.getByText(`The Joe Budden Podcast`)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByTestId('text-author')).toBeInTheDocument()
  });
});
