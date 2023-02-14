import { VITE_API_ITUNES_URL, VITE_API_HEROKU_CORS } from "@/constants/";

const getPodcastsData = async () => {
  try {
    const cors = VITE_API_HEROKU_CORS;
    const url = `${VITE_API_ITUNES_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`;
    const response = await fetch(
      `${cors}/${url}`
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};

export default getPodcastsData;
