import React from "react";
import { embedMovie } from "../../../shared/utils";

export const MovieWatch = ({ id }: any) => {
  return (
    <div className="h-full">
      <iframe
        className="wfull h-full"
        src={embedMovie(id)}
        title="Film Video Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
