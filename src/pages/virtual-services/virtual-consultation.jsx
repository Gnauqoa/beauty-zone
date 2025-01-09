import { Stack, Typography } from "@mui/material";
import bg1 from "../../assets/find-your-shape/background1.webp";
import { Link } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";
import { PATH_PAGE } from "../../routers/path";

const VirtualConsultation = () => {
  // Get the current host and generate the URL
  const isMd = useResponsive("down", "md");

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "secondary.main",
        position: "relative",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%", // Matches the parent's height
          objectFit: "cover",
          position: "absolute",
          zIndex: 10,
        }}
        src={bg1}
        alt="Background"
      />
      <Stack
        sx={{
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          py: 6,
          px: 3,
          backgroundColor: "secondary.main",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          borderRadius: "12px",
          gap: 3,
          maxWidth: isMd ? "60%" : "35%",
          my: 8,
        }}
      >
        <Typography sx={{ fontSize: isMd ? 20 : 46, fontWeight: 600 }}>
          VIRTUAL CONSULTATION
        </Typography>
        <Typography sx={{ fontSize: isMd ? 14 : 24, fontWeight: 300 }}>
          Get personalized help, product recommendations, expert advice + more.
          Click the chat icon at the bottom right corner of the page to get
          started.
        </Typography>
        <div className="flex flex-col items-center">
          <Link to={PATH_PAGE.virtualServices.chatBot}>
            <Typography
              sx={{
                fontSize: isMd ? 20 : 48,
                color: "#fff",
              }}
            >
              <u>Chat now</u>
            </Typography>
          </Link>
          <Link>
            <Typography
              sx={{
                fontSize: isMd ? 20 : 48,
                color: "#fff",
              }}
            >
              <u>Contact with expert</u>
            </Typography>
          </Link>
        </div>
      </Stack>
    </Stack>
  );
};

export default VirtualConsultation;
