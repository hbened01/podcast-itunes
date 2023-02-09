import React from 'react';
import { Header } from "@/components/";
import Routes from "@/routes/Routes";
import "./PodcastItunes.scss";

const PodcastItunes = () => {
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
