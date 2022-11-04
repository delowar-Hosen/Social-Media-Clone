import React from "react";
import { BsThreeDots, BsFillPlayFill } from "react-icons/bs";
import "../videos/videos.css";

const Videos = () => {
  return (
    <>
      <div className="videos">
        <div className="videosHeader">
          <h4>
            Videos<span className="totalVideosCount">7</span>
          </h4>
          <BsThreeDots />
        </div>
        <div className="videosHolder">
          <div className="video">
            <div className="play">
              <BsFillPlayFill />
            </div>
          </div>
          <div className="video">
            <div className="play">
              <BsFillPlayFill />
            </div>
          </div>
          <div className="video">
            <div className="play">
              <BsFillPlayFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
