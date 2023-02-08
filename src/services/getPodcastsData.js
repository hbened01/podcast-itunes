import { VITE_API_ITUNES_URL } from "@/constants/";

const getPodcastsData = async () => {
  try {
    const response = await fetch(
      `${VITE_API_ITUNES_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};

export default getPodcastsData;
