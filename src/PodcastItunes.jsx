import { useState, useEffect } from "react";
import "./PodcastItunes.css";
import { getPodcastsData } from "@/services";
import { Header } from "@/components/";

const PodcastItunes = () => {
  useEffect(() => {
    getPodcastsData().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <>
      <section className="podcast-container">
        <Header />
      </section>
    </>
  );
};

export default PodcastItunes;
