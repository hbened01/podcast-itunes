import { VITE_API_ITUNES_URL, VITE_API_ALLORIGINS_CORS } from "@/constants/";

const getPodcastsDetailData = async (podcastId) => {
  try {
    const cors = VITE_API_ALLORIGINS_CORS;
    const url = `${VITE_API_ITUNES_URL}/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode&limit=250`;
    const response = await fetch(`${cors}/get?url=${encodeURIComponent(url)}`);
    return await response.json();
  } catch (error) {
    return error;
  }
};

export default getPodcastsDetailData;
