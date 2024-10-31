import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppBar from "../components/Appbar";

export default function Root() {
  return (
    <>
      <Stack
        sx={{
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <AppBar />
        <Container>
          <Outlet />
        </Container>
      </Stack>
    </>
  );
}
