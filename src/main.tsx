import React from "react";

import { createRoot } from "react-dom/client";
import "./styles/global.css";
import MainRoutes from "./Routes/routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer autoClose={3000} />
    <MainRoutes />
  </React.StrictMode>
);
