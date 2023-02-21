import React, { useState } from "react";

import "./style.scss";

import Container from "../../../components/container/Container";
import { VideoPopup } from "../../../components/Modal/Modal";
import PlayCircle from "@mui/icons-material/PlayCircle";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideosSection = ({ data, loading }: any) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videosSection">
      <Container>
        <div className="sectionHeading dark:!text-black">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video: any) => (
              <div
                key={video.id}
                className="videoItem"
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                <div className="videoThumbnail">
                  <LazyLoadImage
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <PlayCircle />
                </div>
                <div className="videoTitle dark:!text-black">{video.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </Container>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
