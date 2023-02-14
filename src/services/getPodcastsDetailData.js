import { VITE_API_ITUNES_URL } from "@/constants/";

const getPodcastsDetailData = async (podcastId) => {
  try {
    const url = `${VITE_API_ITUNES_URL}/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode&limit=250`;
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};

export default getPodcastsDetailData;
