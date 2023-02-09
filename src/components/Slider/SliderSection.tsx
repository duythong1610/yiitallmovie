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
import { Button, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const SliderSection = ({ data, loading, endpoint, title }: any) => {
  const { url } = useSelector((state: any) => state.home);
  const navigate = useNavigate();
  console.log(endpoint);

  console.log(loading);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      // autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation
      slidesPerView="auto"
      slidesPerGroupAuto
      spaceBetween={20}
      // loop
      className=""
    >
      {!loading ? (
        <>
          {data && (
            <>
              {data.map((film: any) => {
                return (
                  <SwiperSlide
                    key={film.id}
                    className="slider-item"
                    onClick={() =>
                      navigate(`/${film.media_type || endpoint}/${film.id}`)
                    }
                  >
                    <LazyLoadImage
                      effect="blur"
                      className="slider-img"
                      src={url.poster + film.poster_path}
                    ></LazyLoadImage>
                    <p className="film-title">{film.title}</p>
                  </SwiperSlide>
                );
              })}
            </>
          )}
        </>
      ) : (
        <Skeleton variant="rounded" width={200} height={400} />
      )}
    </Swiper>
  );
};