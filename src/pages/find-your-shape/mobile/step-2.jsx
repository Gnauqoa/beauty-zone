import { useRef, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

const Step2 = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log("Accessing the camera...");
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        console.log("Camera accessed");
        console.log({ videoRef });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          console.log("Camera started");
          setIsCameraActive(true);
        }
      } catch (err) {
        console.error("Error accessing the camera: ", err);
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject;
      stream.getTracks().forEach((track) => track.stop());
      setIsCameraActive(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const image = canvas.toDataURL("image/png");
        setCapturedImage(image); // Save captured image
        stopCamera(); // Stop camera after capture
      }
    }
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
        Capture Your Photo
      </Typography>

      {!isCameraActive && !capturedImage && (
        <Button variant="contained" color="primary" onClick={startCamera}>
          Start Camera
        </Button>
      )}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        hidden={!isCameraActive}
        style={{ width: "100%", borderRadius: "8px" }}
      ></video>
      {isCameraActive && (
        <>
          <Button variant="contained" color="secondary" onClick={capturePhoto}>
            Capture Photo
          </Button>
        </>
      )}

      {capturedImage && (
        <>
          <Typography sx={{ fontSize: 16 }}>Captured Image:</Typography>
          <img
            src={capturedImage}
            alt="Captured"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <Stack sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              color="error"
              onClick={() => setCapturedImage(null)}
            >
              Retake Photo
            </Button>
            <Button
              color="background"
              sx={{ textTransform: "none" }}
              variant="contained"
              onClick={() => setCapturedImage(null)}
            >
              Take me suggest!
            </Button>
          </Stack>
        </>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </Stack>
  );
};

export default Step2;
