import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getHomeMovies, getMovieBannerInfo } from "../services/home";
import { HomeFilms, Item } from "../shared/types";
import { resizeImage } from "../shared/utils";
import { MovieWatch } from "../components/Movies/MovieWatch";
import Banner from "../components/Banner/Banner";
import { MovieDialog } from "../components/Movies/MovieDialog";
// import { HomeFilms } from "../../shared/types";

const Home = () => {
  const [listMovie, setListMovie] = useState<HomeFilms>();
  const [listMovieDetails, setListMovieDetails] = useState<Item>();
  const [details, serDetails] = useState(false);





  useEffect(() => {
    getHomeMovies().then((res: HomeFilms) => setListMovie(res));
  }, []);

  useEffect(() => {
    if (listMovie) {
      getMovieBannerInfo(listMovie?.Trending).then((res: Item) =>
        setListMovieDetails(res)
      );
    }
  }, [listMovie]);

  console.log(listMovie?.Trending);
  console.log(listMovieDetails);
  return (
    <React.Fragment>
      <div className="sm:container mx-auto">
  
        <Header />
        <Banner listMovie={listMovie} listMovieDetail={listMovieDetails} />
      </div>

      <div className="sm:container mx-auto px-8">
        <h1 className="text-white mobile:text-sm text-lg md:text-2xl font-bold mt-6 mb-2 md:mt-12 md:mb-5">
          Trending
        </h1>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView="auto"
          slidesPerGroupAuto
          spaceBetween={30}
          // loop={true}
          className="rounded-sm"
        >
          {listMovie?.Trending.map((movie) => (
            <SwiperSlide key={movie.id} className="!w-[250px]">
              <div className="shadow-sm bg-dark-darken pb-2 rounded-xl overflow-hidden hover:scale-105 hover:brightness-110 transition duration-300 relative group">
                <Link
                  to={
                    movie.media_type === "movie"
                      ? `/${movie.id}`
                      : `/tv/${movie.id}`
                  }
                  className="group"
                >
                  <LazyLoadImage
                    src={resizeImage(movie?.poster_path, "w342")}
                  ></LazyLoadImage>
                </Link>
                {/* <p className="text-white text-center">{movie?.title}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Home;
