import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Item } from "../../shared/types";

import "./style.scss";
import { RootState } from "../../store";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  data: Item;
  fromSearch: boolean;
  mediaType: string;
}

const MovieCard = ({ data, fromSearch, mediaType }: Props) => {
  const { url }: any = useSelector((state: RootState) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : undefined;
  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock">
        <LazyLoadImage className="posterImg" src={posterUrl} />
        {!fromSearch && (
          <React.Fragment>
            {/* <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} /> */}
          </React.Fragment>
        )}
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
