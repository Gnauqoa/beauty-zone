import { useRef, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import ProgressModal from "../../../components/progress-modal";

const Step2Mobile = () => {
  const canvasRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Function to use Cordova File plugin to select and read a file
  const selectFile = () => {
    setSelectedFile("/2.webp");
  };

  const handleTakeMeSuggest = () => {
    console.log("Processing...");
    setOpenModal(true);
  };

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
        gap: 2,
      }}
    >
      <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
        Upload Your Photo
      </Typography>

      {!selectedFile && (
        <Button variant="contained" color="primary" onClick={selectFile}>
          Choose File
        </Button>
      )}

      {selectedFile && (
        <>
          <Typography sx={{ fontSize: 16 }}>Uploaded Image:</Typography>
          <img
            src={selectedFile}
            alt="Selected"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <Stack sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              color="error"
              onClick={() => setSelectedFile(null)}
            >
              Upload New Photo
            </Button>
            <Button
              color="primary"
              sx={{ textTransform: "none" }}
              variant="contained"
              onClick={handleTakeMeSuggest}
            >
              Take me suggest!
            </Button>
          </Stack>
        </>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

      {/* Progress Modal */}
      <ProgressModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onComplete={() => console.log("Progress completed!")}
      />
    </Stack>
  );
};

export default Step2Mobile;
