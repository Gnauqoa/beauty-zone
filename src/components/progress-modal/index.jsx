import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Modal, Box, Typography } from "@mui/material";
import StyledLinearProgress from "../LinearProgress";

const ProgressModal = ({ open, onClose, onComplete }) => {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    if (open) {
      setProgress(0); // Reset progress when modal opens
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 10;
          if (next >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              onComplete(); // Notify parent when complete
              onClose(); // Close modal
            }, 500);
          }
          return next;
        });
      }, 300); // Increment every 300ms
      return () => clearInterval(interval);
    }
  }, [open, onClose, onComplete]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          bgcolor: "background.default",
          border: "2px solid #000",
          borderRadius: "8px",
          boxShadow: 24,
          p: 4,
          textAlign: "center",
          gap: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: 24, fontWeight: 600, color: "primary.main" }}
        >
          Gorgeous!
        </Typography>
        <Typography
          sx={{
            fontSize: 24,
          }}
        >
          Please give us time to observe this beautiful
        </Typography>
        <StyledLinearProgress variant="determinate" value={progress} />
      </Box>
    </Modal>
  );
};

ProgressModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default ProgressModal;
