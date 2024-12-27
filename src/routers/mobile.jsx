import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const Mobile = () => (
  <Stack
    sx={{
      display: "flex",
      flexDirection: "column",
      bgcolor: "background.default",
    }}
  >
    <img src="/logo.svg" className="w-[80px]"/>
    <Outlet />
  </Stack>
);

export default Mobile;
