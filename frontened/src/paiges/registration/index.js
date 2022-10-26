import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import "../registration/registration.css";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [show, setShow] = useState(false);

  let handleFirstname = (e) => {
    setFirstName(e.target.value);
    setFirstNameErr("");
  };

  let handleLastname = (e) => {
    setLastName(e.target.value);
    setLastNameErr("");
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  let showPassword = () => {
    setShow(!show);
  };

  let handleLogIn = (e) => {
    if (!firstName) {
      setFirstNameErr("FirstName is required");
    }
    if (!lastName) {
      setLastNameErr("LastName is required");
    }
    if (!email) {
      setEmailErr("Email is requried");
    } else {
      if (!email.toLowerCase().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        setEmailErr("Valid email is required");
      }
    }
    if (!password) {
      setPasswordErr("Password is required");
    } else if (!password.match(/^(?=.*[a-z])/)) {
      setPasswordErr("Password must contain lower case");
    } else if (!password.match(/^(?=.*[A-Z])/)) {
      setPasswordErr("Password must contain upper case");
    } else if (!password.match(/^(?=.*[0-9])/)) {
      setPasswordErr("Password must contain numberic charcter");
    } else if (!password.match(/^(?=.*[!@#$%^&*])/)) {
      setPasswordErr("Password must contain symbolic charcter");
    } else if (!password.match(/^(?=.{8,})/)) {
      setPasswordErr("Password must contain at least 8 charcter");
    }
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="max-w-loginContainer mx-auto "
      >
        <div>
          <img className="facebook-logo" src="assests/images/Logo.png" />
          <p className="facebook-desc">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="w-[397px] p-4 text-field-r">
          <input
            type="text"
            className="email-input"
            placeholder="First Name"
            onChange={handleFirstname}
          />
          {firstNameErr && (
            <p className="bg-red-500 p-1.5 mt-[-10px] mb-3.5 text-left rounded text-white font-roboto font-regular ">
              {firstNameErr}
            </p>
          )}
          <input
            type="text"
            className="email-input"
            placeholder="Last Name"
            onChange={handleLastname}
          />
          {lastNameErr && (
            <p className="bg-red-500 p-1.5 mt-[-10px] mb-3.5 text-left rounded text-white font-roboto font-regular ">
              {lastNameErr}
            </p>
          )}
          <input
            type="text"
            className="email-input"
            placeholder="Email Address"
            onChange={handleEmail}
          />
          {emailErr ? (
            <p className="bg-red-500 p-1.5 mt-[-10px] mb-3.5 text-left rounded text-white font-roboto font-regular ">
              {emailErr}
            </p>
          ) : (
            ""
          )}
          {show ? (
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                className="email-input"
                placeholder="Password"
                onChange={handlePassword}
              />
              <RiEyeFill onClick={showPassword} className="absulate" />
            </div>
          ) : (
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                className="email-input"
                placeholder="Password"
                onChange={handlePassword}
              />
              <RiEyeCloseFill
                RiEyeFill
                onClick={showPassword}
                className="absulate"
              />
            </div>
          )}

          {passwordErr ? (
            <p className="bg-red-500 p-1.5 mt-[-10px] mb-3.5 text-left rounded text-white font-roboto font-regular ">
              {passwordErr}
            </p>
          ) : (
            ""
          )}
          <div className="text-left mb-[15px]">
            <h6 className="font-roboto font-medium text-base mb-[7px]">
              Date Of Birth :
            </h6>
            <div className="flex gap-x-5">
              <div className="w-[110px] border border-solid border-[#d9d9d9] py-2 px-4 rounded-md relative">
                <select className="font-roboto font-normal text-base appearance-none">
                  <option>Year</option>
                </select>
                <FaAngleDown className="absulate" />
              </div>
              <div className="w-[110px] border border-solid border-[#d9d9d9] py-2 px-4 rounded-md relative">
                <select className="font-roboto font-normal text-base appearance-none">
                  <option>Month</option>
                </select>
                <FaAngleDown className="absulate" />
              </div>
              <div className="w-[110px] border border-solid border-[#d9d9d9] py-2 px-4 rounded-md relative">
                <select className="font-roboto font-normal text-base appearance-none">
                  <option>Day</option>
                </select>
                <FaAngleDown className="absulate" />
              </div>
            </div>
          </div>
          <div className="text-left mb-[15px]">
            <h6 className="font-roboto font-medium text-base mb-[7px]">
              Select Gender:
            </h6>
            <div className="flex gap-x-5">
              <div className="w-[110px] border border-solid border-[#d9d9d9] py-2 px-4 rounded-md relative">
                <p className="font-roboto font-normal text-base appearance-none">
                  Male
                </p>
                <input type="radio" className="absulate" name="gender" />
              </div>
              <div className="w-[110px] border border-solid border-[#d9d9d9] py-2 px-4 rounded-md relative">
                <p className="font-roboto font-normal text-base appearance-none">
                  Female
                </p>
                <input type="radio" className="absulate" name="gender" />
              </div>
              <div className="w-[110px] border border-solid border-[#d9d9d9] py-2 px-4 rounded-md relative">
                <p className="font-roboto font-normal text-base appearance-none">
                  Custom
                </p>
                <input type="radio" className="absulate" name="gender" />
              </div>
            </div>
          </div>
          <Link className="submit-button" onClick={handleLogIn}>
            Sign up
          </Link>
          <Link to="/" className="forgot">
            Forgotten password?
          </Link>
          <div className="line"></div>
          <Link to="/" className="create-button">
            Already have an account ?
          </Link>
        </div>
      </div>
    </>
  );
};

export default Registration;
