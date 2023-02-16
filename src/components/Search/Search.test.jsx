import { render, screen } from "@testing-library/react";
import Search from "./Search";
import { MemoryRouter as Router } from "react-router-dom";

describe("Search", () => {
  it("renders props validation", () => {
    render(
      <Router>
        <Search
          {...{
            count: 15,
          }}
        />
      </Router>
    );
    // screen.debug();
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByText(`15`)).toBeInTheDocument();
  });
});
