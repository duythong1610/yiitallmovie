import React from "react";
import Banner from "./banner/Banner";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Trending from "./trending/Trending";
import "./style.scss";

const Home = () => {
  return (
    <>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </>
  );
};

export default Home;
