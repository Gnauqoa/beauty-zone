import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import RouterProvider from "./routers";
import MuiProvider from "./configs/ mui";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MuiProvider>
      <RouterProvider />
    </MuiProvider>
  </React.StrictMode>
);
