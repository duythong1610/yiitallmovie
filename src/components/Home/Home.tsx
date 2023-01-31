import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import Background from "../background/Background";
import Header from "../header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getHomeMovies, getMovieBannerInfo } from "../../services/home";
import { HomeFilms, Item } from "../../shared/types";
import { resizeImage } from "../../shared/utils";
import { MovieWatch } from "../Movies/MovieWatch";
// import { HomeFilms } from "../../shared/types";

const Home = () => {
  const [listMovie, setListMovie] = useState<HomeFilms>();
  const [listMovieDetails, setListMovieDetails] = useState<Item>();
  const [details, serDetails] = useState(false);

  useEffect(() => {
    getHomeMovies().then((res: HomeFilms) => setListMovie(res));
  }, []);

  useEffect(() => {
    getMovieBannerInfo(listMovie?.Trending as Item[]).then((res: Item) =>
      setListMovieDetails(res)
    );
  }, []);

  console.log(listMovie?.Trending);
  console.log(listMovieDetails);
  return (
    <>
      <Background />
      <Header />
      {listMovie?.Trending.map((movie) => (
        <div className="mt-6 relative h-0 md:pb-[45%] pb-[55%]  tw-banner-slider">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
          >
            <SwiperSlide key={movie.id}>
              <Link
                to={
                  movie.media_type === "movie"
                    ? `/movie/${movie.id}`
                    : `/tv/${movie.id}`
                }
                className="group"
              >
                <LazyLoadImage
                  src={resizeImage(movie?.backdrop_path, "w1280")}
                ></LazyLoadImage>
              </Link>
            </SwiperSlide>
            <MovieWatch data={listMovie?.Trending} />
          </Swiper>
        </div>
      ))}
    </>
  );
};

export default Home;
