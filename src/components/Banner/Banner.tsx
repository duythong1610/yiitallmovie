import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../Header/Header";
import Rating from "@mui/material/Rating";
import { FilmInfo } from "../../shared/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getHomeMovies } from "../../services/home";
import { HomeFilms } from "../../shared/types";
import { Autoplay, Navigation } from "swiper";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { resizeImage } from "../../shared/utils";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { MovieDialog } from "../Movies/MovieDialog";
import { getMovieFullDetail } from "../../services/movie";
// import { HomeFilms } from "../../shared/types";

const Banner = (props: any) => {
  const { listMovie, listMovieDetail } = props;
  const [open, setOpen] = React.useState(false);
  const [listMovieInfo, setListMovieInfo] = useState<FilmInfo>({});

  console.log(listMovieInfo?.credits);

  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getMovieFullDetail(Number(movieId)).then((res) => setListMovieInfo(res));
    }
  }, [movieId]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(listMovieDetail);
  console.log(listMovieInfo);

  // useEffect(() => {
  //   getHomeMovies().then((res) => setListMovie(res));
  // }, []);

  // console.log("abv");
  // console.log(listMovie?.Trending);

  return (
    <>
      <div className="w-full h-full bg-backdrop">
        <MovieDialog
          handleClose={handleClose}
          open={open}
          listMovieDetail={listMovieInfo}
        />
        <Swiper
          modules={[Navigation, Autoplay]}
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView="auto"
          slidesPerGroupAuto
          // loop={true}
          className=""
        >
          {listMovie?.Trending.map((movie: any, index: any) => (
            <SwiperSlide key={movie.id} className="">
              <div className="overflow-hidden duration-300 relative">
                {/* <Link
                  to={
                    movie.media_type === "movie"
                      ? `/movie/${movie.id}`
                      : `/tv/${movie.id}`
                  }
                  className="group"
                > */}

                <div className="w-1/2 h-full">
                  <div className=" w-1/2 absolute h-full bg-backdrop ">
                    <div className="absolute bottom-40 left-10 mobile:bottom-10">
                      <h1 className="font-extrabold mobile:text-xl lg:text-5xl text-emerald-300 mb-5 mobile:mb-0">
                        {movie?.title}
                      </h1>

                      {listMovieDetail && (
                        <p className="font-extrabold text-2xl mobile:text-sm lg:text-3xl text-white">
                          {listMovieDetail[index].translation[0] ||
                            listMovieDetail[index].translation[1] ||
                            listMovieDetail[index].translation[2] ||
                            listMovieDetail[index].translation[3] ||
                            listMovieDetail[index].translation[4] ||
                            listMovieDetail[index].translation[5]}
                        </p>
                      )}

                      <div className="flex space-x-5 my-5 mobile:my-1 mobile:max-h-16 mobile:!text-sm">
                        <Button
                          className="!my-3 !px-10 mobile:w-24 mobile:h-8 !border-none !rounded-3xl !font-semibold  !text-white !bg-red-600 mobile:my-0 mobile:px-1"
                          startIcon={<PlayCircleIcon />}
                        >
                          Phát
                        </Button>
                      </div>

                      <h2 className="font-extrabold mobile:text-xs text-sm lg:text-base mobile:overflow-hidden text-white max-h-10">
                        {movie?.overview}
                      </h2>
                    </div>
                  </div>
                </div>
                <LazyLoadImage
                  className="w-full"
                  src={resizeImage(movie?.backdrop_path, "w1280")}
                ></LazyLoadImage>

                {/* </Link> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
