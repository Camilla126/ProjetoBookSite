import { Routes, Route } from "react-router-dom";
import Layout from "./layout";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BestReader from "../Pages/BestReader";
import MyBooks from "../Pages/MyBooks";
import MyStory from "../Pages/MyStory";
import Saved from "../Pages/Saved";
import Feed from "../Pages/Feed";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/mystory" element={<MyStory />} />
        <Route path="/mybooks" element={<MyBooks />} />
        <Route path="/bestreader" element={<BestReader />} />
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
