import { VITE_API_ITUNES_URL, VITE_API_ALLORIGINS_CORS } from "@/constants/";

const getPodcastsData = async () => {
  try {
    const baseUrl = VITE_API_ITUNES_URL ?? "https://itunes.apple.com"
    const cors = VITE_API_ALLORIGINS_CORS ?? "https://api.allorigins.win";
    const url = `${baseUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`;
    const response = await fetch(`${cors}/get?url=${encodeURIComponent(url)}`);
    return await response.json();
  } catch (error) {
    return error;
  }
};

export default getPodcastsData;
