import { Container, Stack, Typography } from "@mui/material";
import Menu from "./menu.jsx";

const AppBar = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        bgcolor: "#fff",
      }}
    >
      <Container>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            bgcolor: "#fff",
          }}
        >
          <img className="h-[120px]" src={"/logo.svg"} />
          <Typography fontFamily={"Montserrat"}>
            <i>
              step into the beauty zone, <br /> &nbsp; &nbsp; where confidence
              blooms and self-love reigns.
            </i>
          </Typography>
          <Menu />{" "}
        </Stack>
      </Container>
    </Stack>
  );
};

export default AppBar;
