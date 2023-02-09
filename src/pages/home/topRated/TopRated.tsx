import React, { useState } from "react";
import Container from "../../../components/Container/Container";
import { SliderSection } from "../../../components/Slider/SliderSection";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading }: any = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <Container>
      <div className="content-wrapper">
        <span className="title">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </div>
      <div className="slider-section">
        <SliderSection
          data={data?.results}
          loading={loading}
          endpoint={endpoint}
        />
      </div>
    </Container>
  );
};

export default TopRated;