import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import "../login/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [show, setShow] = useState(false);

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
        <div className="w-[397px] p-5 text-field">
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
          <Link className="submit-button" onClick={handleLogIn}>
            Log in
          </Link>
          <Link to="/" className="forgot">
            Forgotten password?
          </Link>
          <div className="line"></div>
          <Link to="/" className="create-button">
            Create New Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
