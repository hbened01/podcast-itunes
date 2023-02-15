import { render, screen } from "@testing-library/react";
import BasicCard from "./BasicCard";
import { MemoryRouter as Router } from "react-router-dom";

describe("BasicCard", () => {
  it("renders props validation", () => {
    render(
      <Router>
        <BasicCard
          {...{
            collectionName: "The Joe Budden Podcast",
            collectionId: 1535809341,
            artworkUrl600:
              "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
            artistName: "The Joe Budden Network",
            summary:
              "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.",
            genres: ["Music", "Podcasts"],
          }}
        />
      </Router>
    );
    // screen.debug();
    expect(screen.getByText(`By The Joe Budden Network`)).toBeInTheDocument();
    expect(screen.getByText(`The Joe Budden Podcast`)).toBeInTheDocument();
    expect(screen.getByText(`Music`)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByTestId("summary")).toBeInTheDocument();
  });
});
