import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BestReader from "../Pages/BestReader";
import MyBooks from "../Pages/MyBooks";
import MyStory from "../Pages/MyStory";
import Saved from "../Pages/Saved";
import Feed from "../Pages/Feed";
import Admin from "../Pages/Admin";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/mystory" element={<MyStory />} />
      <Route path="/mybooks" element={<MyBooks />} />
      <Route path="/bestreader" element={<BestReader />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default MainRoutes;
