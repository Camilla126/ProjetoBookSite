import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ToastContainer autoClose={3000} />
    <MainRoutes />
  </BrowserRouter>
);
