import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./style.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Autoplay, Navigation } from "swiper";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { resizeImage } from "../../shared/utils";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Button } from "@mui/material";

export const SliderBanner = ({ results }: any) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      //   autoplay={{ delay: 5000, disableOnInteraction: false }}
      //   navigation
      slidesPerView="auto"
      slidesPerGroupAuto
      // loop={true}
      className="h-full"
    >
      {results && (
        <>
          {results.map((film: any) => {
            return (
              <SwiperSlide key={film.id}>
                <LazyLoadImage
                  className="slider-banner-img"
                  effect="blur"
                  src={resizeImage(film.backdrop_path, "w1280")}
                ></LazyLoadImage>
              </SwiperSlide>
            );
          })}
        </>
      )}
    </Swiper>
  );
};
