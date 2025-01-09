import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";

export default function Root() {
  return (
    <>
      <Stack
        sx={{
          background: "background.default",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <AppBar />

        <Outlet />
      </Stack>
    </>
  );
}
