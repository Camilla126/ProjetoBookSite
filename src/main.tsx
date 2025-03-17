import React from "react";

import { createRoot } from "react-dom/client";
import "./styles/global.css";
import MainRoutes from "./Routes/routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "./contexts/auth";
import StoryProvider from "./contexts/StoryContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StoryProvider>
          {" "}
          <ToastContainer autoClose={3000} />
          <MainRoutes />
        </StoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
