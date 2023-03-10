import React, { useState } from "react";
import Container from "../../../components/container/Container";
import { SliderSection } from "../../../components/slider/SliderSection";
import SwitchTabs from "../../../components/switchtabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading }: any = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <Container>
      <div className="content-wrapper">
        <span className="title dark:!text-black">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
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

export default Trending;
