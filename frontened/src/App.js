import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./paiges/home/index";
import Login from "./paiges/login/index";
import Registration from "./paiges/registration/index";
import Profile from "./paiges/profile/index";
import { useSelector } from "react-redux";
import { useState } from "react";
import NavBar from "./sections/navbar/index";

function App() {
  const [user, setuser] = useState({});
  let users = useSelector((state) => state);
  console.log(users);

  setTimeout(() => {
    setuser(users.user.userInfo);
  }, 2000);
  return (
    <>
       {user && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/navbar" element={<navBar />} exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/registration" element={<Registration />} exact></Route>
        <Route path="/profile" element={<Profile />} exact></Route>
      </Routes>
    </>
  );
}

export default App;
