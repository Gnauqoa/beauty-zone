import { Stack, Typography } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
import bg1 from "../../assets/find-your-shape/background1.webp";
import { PATH_PAGE } from "../../routers/path";
import { Link, useSearchParams } from "react-router-dom";

const FindYourShape = () => {
  // Get the current host and generate the URL
  const currentHost = window.location.origin;
  const [, setSearchParams] = useSearchParams();
  const qrCodeUrl = `${currentHost}${PATH_PAGE.mobile.findYourShape.step1}`;
  const [searchParams] = useSearchParams();
  const resultPage = searchParams.get("result");
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "secondary.main",
        position: "relative",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%", // Matches the parent's height
          objectFit: "cover",
          position: "relative",
        }}
        src={bg1}
        alt="Background"
      />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          py: 6,
          px: 3,
          backgroundColor: "secondary.main",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Centers the element
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          borderRadius: "12px",
          gap: 3,
          maxWidth: "35%",
        }}
      >
        <Typography sx={{ fontSize: 45, fontWeight: 600 }}>
          {resultPage === "true" ? "CHECK THE RESULT" : "SHADE FINDER"}
        </Typography>
        <Typography sx={{ fontSize: 24, fontWeight: 300 }}>
          {resultPage === "true"
            ? "USING AI TECHNOLOGY, INSTANTLY FIND YOUR FOUNDATION SHADE BASED ON YOUR SKIN ANALYSIS"
            : "THE ANALYSIS PROCESS IS COMPLETED. YOU CAN CHECK YOUR RESULTS NOW"}
        </Typography>
        {resultPage !== "true" && <QRCodeSVG value={qrCodeUrl} size={150} />}
        {resultPage === "true" ? (
          <Link to={PATH_PAGE.findYourShape.result}>
            <Typography
              sx={{
                fontSize: 45,
                fontWeight: 600,
                color: "background.default",
              }}
            >
              Click here
            </Typography>
          </Link>
        ) : (
          <>
            <Typography
              sx={{
                fontSize: 24,
                color: "background.default",
                fontWeight: 300,
              }}
            >
              This experience is mobile only. Use your phone to scan the QR code
              to get started.
            </Typography>

            <div
              className="cursor-pointer"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("result", "true");
                  return prev;
                })
              }
            >
              <Typography
                sx={{
                  fontSize: 12,
                  color: "background.default",
                  fontWeight: 300,
                }}
              >
                <i>Scan successfully? Click here to start</i>
              </Typography>
            </div>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default FindYourShape;
