import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../routers/path";
import bg1 from "../../assets/virtual-services/background1.png";
import bg2 from "../../assets/virtual-services/background2.png";

const VirtualServices = () => {
  const isMd = useResponsive("down", "md");
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        gap: 10,
        backgroundColor: "secondary.main",
        pb: 10,
        overflow: "hidden",
      }}
    >
      <Banner imgSrc={bg1}>
        <Typography sx={{ fontSize: isMd ? 22 : 70, fontWeight: 600 }}>
          FIND YOUR SHAPE
        </Typography>
        <Typography sx={{ fontSize: isMd ? 16 : 24, fontWeight: 400 }}>
          FIND YOUR PERFECT SHAPE WITH A QUICK SELFIE WE’LL DO THE REST
        </Typography>

        <Link to={PATH_PAGE.findYourShape.root}>
          <Typography
            sx={{
              fontSize: isMd ? 12 : 40,
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            Find your shape
          </Typography>
        </Link>
      </Banner>
      <Banner imgSrc={bg2}>
        <Link to={PATH_PAGE.findYourShape.root}>
          <Typography
            sx={{
              fontSize: isMd ? 16 : 40,
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            Find now
          </Typography>
        </Link>
        <Typography sx={{ fontSize: isMd ? 22 : 70, fontWeight: 600 }}>
          VIRTUAL <br></br> CONSULTATION
        </Typography>
        <Typography sx={{ fontSize: isMd ? 12 : 24, fontWeight: 400 }}>
          MAKE A CONSULTATION WITH OUR AI CHATBOX AND GET YOUR OWN BEAUTY
        </Typography>
      </Banner>
    </Stack>
  );
};

import PropTypes from "prop-types";
import useResponsive from "../../hooks/useResponsive";

const Banner = ({ children, imgSrc }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        aspectRatio: "auto", // Ensures the height matches the image proportionally
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%", // Matches the parent's height
          objectFit: "cover",
          position: "relative",
        }}
        src={imgSrc}
        alt="Background"
      />
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "absolute",

          zIndex: 20,
          bottom: "15%",
          left: "10%",
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

Banner.propTypes = {
  children: PropTypes.node,
  imgSrc: PropTypes.string.isRequired,
};

export default VirtualServices;
