import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import PodcastItunes from "./PodcastItunes";

describe('PodcastItunes', () => {
  it('renders headline', () => {
    render(<PodcastItunes />);
    // screen.debug();
    expect(screen.getByText('Itunes Podcaster')).toBeInTheDocument();
    expect(screen.getByRole("heading")).toBeInTheDocument()

  });
});