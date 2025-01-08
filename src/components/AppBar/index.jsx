import { Container, Stack, Typography } from "@mui/material";
import Menu from "./menu.jsx";
import SubBar from "./subBar.jsx";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../routers/path.js";
import useResponsive from "../../hooks/useResponsive.js";

const AppBar = () => {
  const isSm = useResponsive("down", "sm");
  return (
    <div className="flex flex-col w-full">
      <Stack
        sx={{
          width: "100%",
          bgcolor: "background.default",
        }}
      >
        <Container>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Link to={PATH_PAGE.main}>
              <img style={{ height: "120px" }} src={"/logo.svg"} />
            </Link>
            {!isSm && (
              <Typography fontFamily={"Montserrat"}>
                <i>
                  step into the beauty zone, <br /> &nbsp; &nbsp; where
                  confidence blooms and self-love reigns.
                </i>
              </Typography>
            )}
            <Menu />
          </Stack>
        </Container>
      </Stack>

      <SubBar />
    </div>
  );
};

export default AppBar;
