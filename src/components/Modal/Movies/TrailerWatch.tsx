import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

export const TrailerWatch = ({ id }: any) => {
  console.log(id);
  return (
    <div className="h-full">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls
        width="100%"
        height="100%"
        // playing={true}
      />
    </div>
  );
};
