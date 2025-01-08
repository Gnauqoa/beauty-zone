import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import RouterProvider from "./routers";
import MuiProvider from "./configs/mui/index";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <MuiProvider>
        <RouterProvider />
      </MuiProvider>
    </AuthProvider>
  </React.StrictMode>
);
