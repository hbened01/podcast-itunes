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

// describe("initApp", () => {
//   const mock = {};
//   afterEach(cleanup);
//   beforeEach(() => {
//     const { container } = render(<PodcastItunes />);
//     mock.container = container;
//   });

//   it("Verific header text", () => {
//     const { container } = mock;
//     screen.getByText("Itunes Podcaster");
//     // expect( getByText('Itunes Podcaster') ).toBeInTheDocument();
//   //   expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
//   //   expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
//   //   expect(screen.getByRole("img")).toBeInTheDocument();
//   });



// });

// describe('true is truthy and false is falsy', () => {
//   it('true is truthy', () => {
//     expect(true).toBe(true);
//   });

//   it('false is falsy', () => {
//     expect(false).toBe(false);
//     expect(screen.getByText('Itunes Podcaster')).toBeInTheDocument();
//   });


// });