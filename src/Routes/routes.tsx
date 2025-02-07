import { Routes, Route } from "react-router-dom";
import Layout from "./layout";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BestReader from "../Pages/BestReader";
import MyBooks from "../Pages/MyBooks";
import CreateStory from "../Pages/CreateStory";
import Saved from "../Pages/Saved";
import Feed from "../Pages/Feed";
import MyStory from "../Pages/MyStory";
const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/createstory" element={<CreateStory />} />
        <Route path="/mybooks" element={<MyBooks />} />
        <Route path="/bestreader" element={<BestReader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mystory" element={<MyStory />} />
      </Route>

      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
