import { useState, useEffect } from "react";
import "./PodcastItunes.css";
import { getPodcastsData } from "@/services";
import { Header } from "@/components/";
import Routes from "@/routes/Routes";

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
        <Routes />
      </section>
    </>
  );
};

export default PodcastItunes;
