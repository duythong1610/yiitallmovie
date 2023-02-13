import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./style.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Autoplay, Navigation } from "swiper";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { resizeImage } from "../../shared/utils";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Button } from "@mui/material";

export const SliderBanner = ({ results }: any) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      // navigation
      slidesPerView="auto"
      slidesPerGroupAuto
      // loop={true}
      className="h-full"
    >
      {results && (
        <>
          {results.map((film: any) => {
            return (
              <SwiperSlide key={film.id} className="slider-banner">
                <div className="opacity-layer"></div>
                <div className="film-content">
                  <h1 className="film-title">{film.title}</h1>
                  <div className="button-action">
                    <button
                      className="action-btn"
                      // onClick={() => {
                      //   setShow(true);
                      // }}
                    >
                      <PlayCircleIcon />
                      <span className="text">Watch</span>
                    </button>
                    <button className="action-btn">
                      {" "}
                      <InfoOutlinedIcon />
                      <span className="text">Information</span>
                    </button>
                  </div>
                  <p className="film-overview">{film.overview}</p>
                </div>

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
