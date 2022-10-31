import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let user = useSelector((state) => state);
  let navigate = useNavigate();

  useEffect(() => {
    if (!user.user.userInfo) {
      navigate("/login");
    }
  }, []);
  return <div>Home</div>;
};

export default Home;
