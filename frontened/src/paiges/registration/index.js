import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import "../registration/registration.css";
import axios from "axios";

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
  const [year, setYear] = useState(new Date().getFullYear());
  const [bYear, setBYear] = useState("");
  const [bMonth, setBMonth] = useState("");
  const [bDay, setBDay] = useState("");
  const [birthErr, setBirthErr] = useState("");
  const [gender, setGender] = useState("");
  const [genderErr, setGenderErr] = useState("");
  const [err, setErr] = useState("");

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

  let handleYear = (e) => {
    setBYear(e.target.value);
    setBirthErr("");
  };

  let handleDay = (e) => {
    setBDay(e.target.value);
    setBirthErr("");
  };

  let handleMonth = (e) => {
    setBMonth(e.target.value);
    setBirthErr("");
  };

  let handleGender = (gender) => {
    setGender(gender);
    setGenderErr("");
  };

  const years = Array.from(new Array(70), (val, index) => year - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const days = Array.from(
    new Array(new Date(bYear, bMonth, 0).getDate()),
    (val, index) => 1 + index
  );
  console.log();

  let handleLogIn = async (e) => {
    // if (!firstName) {
    //   setFirstNameErr("FirstName is required");
    // }
    // if (!lastName) {
    //   setLastNameErr("LastName is required");
    // }
    // if (!email) {
    //   setEmailErr("Email is requried");
    // } else {
    //   if (!email.toLowerCase().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    //     setEmailErr("Valid email is required");
    //   }
    // }
    // if (!password) {
    //   setPasswordErr("Password is required");
    // } else if (!password.match(/^(?=.*[a-z])/)) {
    //   setPasswordErr("Password must contain lower case");
    // } else if (!password.match(/^(?=.*[A-Z])/)) {
    //   setPasswordErr("Password must contain upper case");
    // } else if (!password.match(/^(?=.*[0-9])/)) {
    //   setPasswordErr("Password must contain numberic charcter");
    // } else if (!password.match(/^(?=.*[!@#$%^&*])/)) {
    //   setPasswordErr("Password must contain symbolic charcter");
    // } else if (!password.match(/^(?=.{8,})/)) {
    //   setPasswordErr("Password must contain at least 8 charcter");
    // }

    // if (!bYear) {
    //   setBirthErr("Please select year");
    // } else if (!bMonth) {
    //   setBirthErr("please select month");
    // } else if (!bDay) {
    //   setBirthErr("Please select Date");
    // } else if (bYear) {
    //   if (new Date().getFullYear() - bYear < 18) {
    //     setBirthErr("18 years required");
    //   }
    // }

    // if (!gender) {
    //   setGenderErr("Please select a gender");
    // }

    try {
      let { data } = await axios.post("http://localhost:8000/register", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        bYear: bYear,
        bMonth: bMonth,
        bDay: bDay,
        gender: gender,
      });
      console.log(data);
    } catch (error) {
      setErr(error.response.data.message);
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
              <div className="relative">
                <select
                  onChange={handleYear}
                  className="w-[110px] font-roboto font-normal text-[14px] appearance-none border border-solid border-[#d9d9d9] py-2 px-4 rounded-md relative"
                >
                  <option>Year</option>
                  {years.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>

                <FaAngleDown className="absulate" />
              </div>
              <div className="relative">
                <select
                  onChange={handleMonth}
                  className="w-[110px] font-roboto font-normal text-[14px] appearance-none border border-solid border-[#d9d9d9] py-2 px-4 rounded-md relative"
                >
                  <option>Month</option>
                  {months.map((item, index) => (
                    <option value={item} key={index}>
                      {item == 1 && "January"}
                      {item == 2 && "Febuary"}
                      {item == 3 && "March"}
                      {item == 4 && "April"}
                      {item == 5 && "May"}
                      {item == 6 && "June"}
                      {item == 7 && "July"}
                      {item == 8 && "Augest"}
                      {item == 9 && "September"}
                      {item == 10 && "Octobor"}
                      {item == 11 && "Novembor"}
                      {item == 12 && "December"}
                    </option>
                  ))}
                </select>
                <FaAngleDown className="absulate" />
              </div>
              <div className="relative">
                <select
                  onChange={handleDay}
                  className="w-[110px] font-roboto font-normal text-[14px] appearance-none border border-solid border-[#d9d9d9] py-2 px-4 rounded-md relative"
                >
                  <option>Date</option>
                  {days.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
                <FaAngleDown className="absulate" />
              </div>
            </div>
            {birthErr ? (
              <p className="bg-red-500 p-1.5 mt-[10px] mb-3.5 text-left rounded text-white font-roboto font-regular ">
                {birthErr}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="text-left mb-[15px]">
            <h6 className="font-roboto font-medium text-base mb-[7px]">
              Select Gender:
            </h6>
            <div className="flex gap-x-5">
              <label>
                <div className="w-[110px] border border-solid border-[#d9d9d9] py-2 px-4 rounded-md relative">
                  <p className="font-roboto font-normal text-base appearance-none">
                    Male
                  </p>
                  <input
                    type="radio"
                    className="absulate"
                    name="gender"
                    onChange={() => handleGender("Male")}
                  />
                </div>
              </label>
              <label>
                <div className="w-[110px] border border-solid border-[#d9d9d9] py-2 px-4 rounded-md relative">
                  <p className="font-roboto font-normal text-base appearance-none">
                    Female
                  </p>
                  <input
                    type="radio"
                    className="absulate"
                    name="gender"
                    onChange={() => handleGender("Female")}
                  />
                </div>
              </label>
              <label>
                <div className="w-[110px] border border-solid border-[#d9d9d9] py-2 px-4 rounded-md relative">
                  <p className="font-roboto font-normal text-base appearance-none">
                    Custom
                  </p>
                  <input
                    type="radio"
                    className="absulate"
                    name="gender"
                    onChange={() => handleGender("Custom")}
                  />
                </div>
              </label>
            </div>
            {genderErr ? (
              <p className="bg-red-500 p-1.5 mt-[10px] mb-3.5 text-left rounded text-white font-roboto font-regular ">
                {genderErr}
              </p>
            ) : (
              ""
            )}
          </div>
          <Link className="submit-button" onClick={handleLogIn}>
            Sign up
          </Link>
          {err && (
            <p className="bg-red-500 p-1.5 mt-[2px] mb-3.5 text-left rounded text-white font-roboto font-regular ">
              {err}
            </p>
          )}
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
