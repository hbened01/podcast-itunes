import { createContext } from "react";

const Context = createContext({
  podcastDataCtx: 0,
  setPodcastDataCtx: () => {},
  isLoadingCtx: false,
  setIsLoadingCtx: () => {}
});

export { Context };
