import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";

const PodcastDetail = () => {
  const { id } = useParams();
  return <div>This is a simple PodcastDetail component {id}</div>;
};

export default PodcastDetail;
