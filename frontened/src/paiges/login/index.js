import React from "react";
import { Link } from "react-router-dom";
import "../login/login.css";
const Login = () => {
  return (
    <>
      <div style={{display:"flex",justifyContent:"space-between"}} className="max-w-loginContainer mx-auto ">
        <div>
          <img className="facebook-logo" src="assests/images/Logo.png" />
          <p className="facebook-desc">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="w-[397px] p-5 text-field">
          <input type="text" className="email-input" placeholder="Email Address"/>
          <input type="text" className="email-input" placeholder="Password"/>
          <Link  to="/" className="submit-button" >Log in</Link>
          <Link to="/" className="forgot">Forgotten password?</Link>
          <div className="line"></div>
          <Link to="/" className="create-button" >Create New Account</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
