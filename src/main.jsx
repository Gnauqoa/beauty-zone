import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import RouterProvider from "./routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>
);
