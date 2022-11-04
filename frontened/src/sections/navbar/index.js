import React from "react";
import "../navbar/navbar.css";
import { FaBars, FaTools } from "react-icons/fa";
import { BsThreeDots, BsFillCartFill, BsFillChatFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <div style={{ display: "flex" }}>
            <picture className="logo-img">
              <img src="assests/images/logo-1.png" />
            </picture>
            <div className="logo-bar">
              <FaBars />
            </div>
          </div>
        </div>
        <div className="menu">
          <ul className="menu-name">
            <li>
              <a
                className="font-pop text-white font-bold text-sm mr-10"
                href="#"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="font-pop text-white font-bold text-sm mr-10"
                href="#"
              >
                Store
              </a>
            </li>
            <li>
              <a
                className="font-pop text-white font-bold text-sm mr-10"
                href="#"
              >
                FAQ
              </a>
            </li>
            <li>
              <a href="#">
                <BsThreeDots className="font-pop text-white font-bold text-sm " />
              </a>
            </li>
          </ul>
          <div className="relative pt-4">
            <label>
              <input className="search-box" placeholder="search here" />
              <BiSearchAlt2 className="search-icon" />
            </label>
          </div>
          <div className="ml-8 pt-7 pb-7">
            <span className="font-pop text-xs font-normal leading-4 text-white mr-11">
              Next
            </span>
            <span className="font-pop text-xs font-normal leading-4 text-white ">
              35 EXP
            </span>
            <div className="exp-line"></div>
          </div>
          <div className="line"></div>
          <div className="flex ml-8 ">
            <div className="relative mr-7 mt-8 mb-7">
              <BsFillCartFill className="cart-icon" />
              <span className="goods-count">5</span>
            </div>
            <div className="relative mr-7  mt-8 mb-7">
              <BsFillChatFill className="cart-icon" />
              <span className="goods-count2">sms</span>
            </div>
            <div className="relative  mt-8 mb-7">
              <IoIosNotifications className="cart-icon" />
              <span className="goods-count3"></span>
            </div>
          </div>
          <div className="line"></div>
          <FaTools className="tool-icon mt-8 mb-7" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
