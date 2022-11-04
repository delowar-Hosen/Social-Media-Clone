import React from "react";
import "../midpage/midbar.css";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import About from "../about";
import Photos from "../photos";
import Videos from "../videos";
import Post from "../feedPost";


const MidBar = () => {
  return (
    <>
      <div className="newsFeed">
        <div className="relative mt-8">
          <picture>
            <img className="homeCoverPic " src="assests/images/cover-2.png" />
          </picture>
          <picture>
            <img className="homePic" src="assests/images/profile.png" />
          </picture>
        </div>
        <div className="homeInfo">
          <div className="flex">
            <div className="profileDescInfo">
              <h5 className="font-pop font-bold text-sm text-black leading-6">
                930
              </h5>
              <h6 className="font-pop font-medium text-xs text-[#AFB0C0] leading-5">
                Friends
              </h6>
            </div>
            <div className="line-2"></div>
            <div className="profileDescInfo">
              <h5 className="font-pop font-bold text-sm text-black leading-6">
                87
              </h5>
              <h6 className="font-pop font-medium text-xs text-[#AFB0C0] leading-5">
                Posts
              </h6>
            </div>
            <div className="line-2"></div>
            <div className="profileDescInfo">
              <h5 className="font-pop font-bold text-sm text-black leading-6">
                1k
              </h5>
              <h6 className="font-pop font-medium text-xs text-[#AFB0C0] leading-5">
                Followers
              </h6>
            </div>
          </div>
          <div className="profile-name">
            <h2 className="font-pop font-bold text-base text-black leading-6">
              A B M Shawon Islam
            </h2>
            <p className="font-pop font-medium text-xs text-[#AFB0C0] leading-5">
              www.abm.com
            </p>
          </div>
          <div className="social-icons">
            <div className="icon" style={{ background: "#3763D2" }}>
              <AiFillFacebook className="fa-icon" />
            </div>
            <div className="icon" style={{ background: "#f8468d" }}>
              <AiOutlineInstagram className="fa-icon" />
            </div>
            <div className="icon" style={{ background: "#28bcff" }}>
              <AiOutlineTwitter className="fa-icon" />
            </div>
            <div className="icon" style={{ background: "#f8444f" }}>
              <AiFillYoutube className="fa-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="news">
        <div className="newsFeedLeft">
          <About />
          <Photos />
          <Videos />
        </div>
        <div className="newsFeedRight">
          <Post/>
        </div>
      </div>
    </>
  );
};

export default MidBar;
