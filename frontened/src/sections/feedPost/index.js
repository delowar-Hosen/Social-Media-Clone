import React from "react";
import "../feedPost/post.css";
import {
  BsThreeDots,
  BsFillEmojiSmileFill,
  BsFillSuitHeartFill,
} from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

const Post = () => {
  return (
    <>
      <div className="textPost">
        <div className="postHeader">
          <img className="postImage" src="assests/images/post.png" />
          <div className="postNameInfo">
            <h6>A B M Shawon Islam</h6>
            <p>29 minutes ago</p>
          </div>
          <BsThreeDots className="dot" />
        </div>
        <div className="text">
          <p>
            I have great news to share with you all! I’ve been officially made a
            game streaming verified partner by Streamy http://lyt.ly/snej25.
            What does this mean? I’ll be uploading new content every day,
            improving the quality and I’m gonna have access to games a month
            before the official release. This is a dream come true, thanks to
            all for the support!!!
          </p>
        </div>
        <div className="userReact">
          <div className="reactIcons">
            <BsFillEmojiSmileFill />
            <BsFillSuitHeartFill />
            <AiFillLike />
            <span className="number">12</span>
          </div>
          <div>
            <p className="comments">
              <span className="number">13</span> comments
            </p>
          </div>
          <div>
            <p className="comments">
              <span className="number">2</span> shares
            </p>
          </div>
        </div>
        <div className="userPost">
          <div className="userComment">
            <AiFillLike className="likeIcon" />
            <span className="like">Like</span>
          </div>
          <div className="userComment">
            <AiFillLike className="likeIcon" />
            <span className="like">Like</span>
          </div>
          <div className="userComment">
            <AiFillLike className="likeIcon" />
            <span className="like">Like</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
