import { Button, Stack, Typography } from "@mui/material";

const Step1 = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",

        height: "100%",
        m: 2,
        p: 2,
        borderRadius: "12px",
        backgroundColor: "secondary.main",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: 24, fontWeight: 400 }}>
        <span className="text-[#8C1C13] font-[600]">
          Take selfies according to the following notes
        </span>
        <br></br>
        <span className="text-[#8C1C13] font-[600]">
          1. Requirements for photo background
        </span>{" "}
        <br></br>
        The background should be a solid color and have no complicated patterns
        or images.
        <br></br>
        <span className="text-[#8C1C13] font-[600]">2. Light</span>
        <br></br>
        Should be taken in good lighting conditions, avoid light that is too
        bright or too dark. The light must be enough to highlight facial
        details.
        <br></br>
        <span className="text-[#8C1C13] font-[600]"> 3. Face</span>
        <br></br>
        The photographer's face should be in the center of the frame. Avoid
        covering your face with eyeglasses, hats or other accessories. Faces
        should be captured clearly and not blurred or distorted.
        <br></br>
        <span className="text-[#8C1C13] font-[600]">4. Appearance</span>
        <br></br>
        The photographer's appearance needs to be naturally beautiful and not
        overly expressive or too serious. Make sure your eyes are not closed and
        your mouth is not open too wide.
      </Typography>
      <div>
        <Button
          sx={{
            borderRadius: "24px",
            color: "primary.main",
            bgcolor: "transparent",
            border: "1px solid",
            textTransform: "none",
          }}
        >
          Let's go
        </Button>
      </div>
    </Stack>
  );
};

export default Step1;
