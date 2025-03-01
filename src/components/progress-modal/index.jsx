import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Modal, Box, Typography, Button } from "@mui/material";
import StyledLinearProgress from "../LinearProgress";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../routers/path";

const ProgressModal = ({ open, onClose }) => {
  const [progress, setProgress] = React.useState(0);
  const [isCompleted, setIsCompleted] = React.useState(false);
  useEffect(() => {
    if (open) {
      setProgress(0); // Reset progress when modal opens
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 10;
          if (next >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsCompleted(true); // Notify parent when complete
            }, 500);
          }
          return next;
        });
      }, 300); // Increment every 300ms
      return () => clearInterval(interval);
    }
  }, [open, onClose]);

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
          {isCompleted ? "All done!" : "Gorgeous!"}
        </Typography>

        <Typography
          sx={{
            fontSize: 24,
          }}
        >
          {isCompleted
            ? "Please check your fit"
            : "Please give us time to observe this beautiful"}
        </Typography>
        {isCompleted ? (
          <div>
            <Link to={PATH_PAGE.mobile.findYourShape.step3}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "24px",
                }}
              >
                Check it out
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <StyledLinearProgress variant="determinate" value={progress} />
          </>
        )}
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
