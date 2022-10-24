import logo from "./logo.svg";
import "./App.css";
import{Routes,Route} from "react-router-dom"
import Home from "./paiges/home/index";
import Login from "./paiges/login/index";
import Registration from "./paiges/registration/index";
import Profile from "./paiges/profile/index";

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>} exact></Route>
    <Route path="/login" element={<Login/>} exact></Route>
    <Route path="/registration" element={<Registration/>} exact></Route>
    <Route path="/profile" element={<Profile/>} exact></Route>
   </Routes>
   </>
  );
}

export default App;
