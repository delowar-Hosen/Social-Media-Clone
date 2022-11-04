import React from "react";
import "../photos/photos.css";
import { BsThreeDots } from "react-icons/bs";

const Photos = () => {
  return (
    <>
      <div className="photos">
        <div className="photosHeader">
          <h4>
            Photos<span className="totalCount">37</span>
          </h4>
          <BsThreeDots />
        </div>
        <div className="imageHolder">
            <img src="assests/images/img-1.png" className="images" />
            <img src="assests/images/img-1.png" className="images" />
            <img src="assests/images/img-1.png" className="images" />
            <img src="assests/images/img-1.png" className="images" />
            <img src="assests/images/img-1.png" className="images" />
            <div className="imagesRemain">
                <span className="imageCount">32 +</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
