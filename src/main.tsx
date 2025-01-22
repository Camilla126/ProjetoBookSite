import React from "react";

import { createRoot } from "react-dom/client";
import "./styles/global.css";
import MainRoutes from "./Routes/routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "./contexts/auth";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000} />
        <MainRoutes />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
