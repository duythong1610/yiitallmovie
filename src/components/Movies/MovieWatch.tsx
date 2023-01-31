import React from "react";
import { embedMovie } from "../../shared/utils";
import { useParams } from "react-router-dom";

export const MovieWatch = (props: any) => {
  const { data } = props;
  console.log(data);

  const movieId = useParams().id;

  console.log(movieId);
  return (
    <div>
      <iframe
        className="absolute w-full h-full top-0 left-0"
        src={embedMovie(movieId)}
        title="Film Video Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
