import * as React from "react";
import { TrailerWatch } from "./movies/TrailerWatch";
import "./style.scss";

export const VideoPopup = ({ show, setShow, id }: any) => {
  console.log(id);

  const hidePopup = () => {
    setShow(false);
    id = 0;
  };

  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>

      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>
        <TrailerWatch id={id} />
      </div>
    </div>
  );
};
