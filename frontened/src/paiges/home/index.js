import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Grid} from '@mui/material';
import SideBar from "../../sections/sidebar/index";
import MidBar from "../../sections/midpage/index";



const Home = () => {
  let user = useSelector((state) => state);
  let navigate = useNavigate();

  useEffect(() => {
    if (!user.user.userInfo) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SideBar/>
        </Grid>
        <Grid item xs={8}>
          <MidBar/>
        </Grid>
        <Grid item xs={1}>
          <h1>xs=1</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
