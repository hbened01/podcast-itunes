import * as React from 'react'
import Home from "./Home";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

describe("Home Tests", () => {
  it("if elements render", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    // screen.debug();
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByTestId('home-container')).toBeInTheDocument()
  });
});