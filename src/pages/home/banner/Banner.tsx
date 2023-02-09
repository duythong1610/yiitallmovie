import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import { resizeImage } from "../../../shared/utils";
import { SliderBanner } from "../../../components/Slider/SilderBanner";
const Banner = () => {
  const [results, setResult] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state: any) => state.home);
  const { data, loading }: any = useFetch("/movie/upcoming");

  console.log("Data =>>", data);
  console.log("Loading =>>", loading);
  console.log("URL =>> ", url);

  useEffect(() => {
    const re = data?.results;
    setResult(re);
  }, [data]);

  console.log(results);

  return (
    <>
      <div className="banner">
        <SliderBanner results={results} />
      </div>
    </>
  );
};

export default Banner;
