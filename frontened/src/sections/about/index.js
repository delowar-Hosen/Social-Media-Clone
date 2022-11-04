import React from "react";
import { BsThreeDots } from "react-icons/bs";
import "../about/about.css";

const About = () => {
  return (
    <>
      <div className="aboutMe">
        <div className="aboutHeader">
          <h4>About Me</h4>
          <BsThreeDots />
        </div>
        <p className="aboutPara">
          Hi! My name is A B M Shawon Islam but some people may know me as
          GameHuntress! I have a Twitch channel where I stream, play and review
          all the newest games.
        </p>
        <ul className="aboutInfo">
          <li>
            <span className="aboutInfoTag">Joined:</span> 22 November 2008
          </li>
          <li>
            <span className="aboutInfoTag">City:</span> 22 November 2008
          </li>
          <li>
            <span className="aboutInfoTag">Age:</span> 22 November 2008
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
