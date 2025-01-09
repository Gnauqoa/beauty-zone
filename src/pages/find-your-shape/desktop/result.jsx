import { Container, Stack, Typography } from "@mui/material";
import result from "../../../assets/find-your-shape/result.png";
import pallet from "../../../assets/find-your-shape/pallet.png";

const Result = () => {
  return (
    <Container>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          my: 6,
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 300 }}>
          Your personal color is{" "}
          <i>
            <span className="text-[#8C1C13] font-[500]">Light Spring </span>
          </i>
        </Typography>
        <Typography sx={{ fontSize: 20, fontWeight: 100 }}>
          Here is some recommends for you
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
          }}
        >
          <img src={result} className="w-full h-auto" />
          <Typography sx={{ fontSize: 64, fontWeight: 600, color: "#A78A7F" }}>
            Color pallet
          </Typography>
          <img src={pallet} className="w-full h-auto" />
        </Stack>
      </Stack>{" "}
    </Container>
  );
};

export default Result;
