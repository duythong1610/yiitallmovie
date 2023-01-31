import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Background from "../background/Background";
import Header from "../header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getHomeMovies } from "../../services/home";
import { HomeFilms } from "../../shared/types";
// import { HomeFilms } from "../../shared/types";

const Home = () => {
  const [listMovie, setListMovie] = useState<HomeFilms>();

  useEffect(() => {
    getHomeMovies().then((res) => setListMovie(res));
  }, []);

  console.log("abv");
  console.log(listMovie?.Trending);

  return (
    <>
      <Background />
      <Header />

      <>
        {" "}
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="!absolute !top-0 !left-0 !w-full !h-full  !rounded-lg"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </>
    </>
  );
};

export default Home;
