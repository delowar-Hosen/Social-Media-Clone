import React from "react";
import "../sidebar/sidebar.css";
import {
  FaLayerGroup,
  FaNewspaper,
  FaVideo,
  FaUserFriends,
} from "react-icons/fa";
import { MdMonochromePhotos, MdLogout } from "react-icons/md";
import { FiGitPullRequest } from "react-icons/fi";

const SideBar = () => {
  return (
    <>
      <div className="profile">
        <div className="relative">
          <picture>
            <img className="profileCoverPic" src="assests/images/cover.png" />
          </picture>
          <picture>
            <img className="profilePic" src="assests/images/profile.png" />
          </picture>
        </div>
        <div className="profileInfo">
          <h2 className="font-pop font-bold text-base text-black leading-6">
            A B M Shawon Islam
          </h2>
          <p className="font-pop font-medium text-xs text-[#AFB0C0] leading-5">
            www.abm.com
          </p>
        </div>
        <div className="flex pl-8 mt-10">
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
        <div className="mt-16">
          <ul className="profileLink">
            <li>
              <FaNewspaper />
              Newsfeed
            </li>
            <li>
              <FaVideo />
              Videos
            </li>
            <li>
              <MdMonochromePhotos />
              Photos
            </li>
            <li>
              <FaLayerGroup />
              Groups
            </li>
            <li>
              <FaUserFriends />
              Friends
            </li>
            <li>
              <FiGitPullRequest />
              Friends Request
            </li>
            <li>
              <MdLogout />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
