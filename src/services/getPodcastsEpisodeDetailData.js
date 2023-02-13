import { VITE_API_ITUNES_URL } from "@/constants/";

const getPodcastsEpisodeDetailData = async (podcastId) => {
  try {
    const url = `${VITE_API_ITUNES_URL}/lookup?id=${podcastId}`;
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};

export default getPodcastsEpisodeDetailData