import { LinearProgress } from "@mui/material";
import { styled } from "@mui/system";

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20, // Increase height
  borderRadius: 10, // Add border radius
  backgroundColor: theme.palette.grey[300], // Customize background
  "& .MuiLinearProgress-bar": {
    borderRadius: 10, // Match bar border radius
    backgroundColor: theme.palette.primary.main, // Progress bar color
  },
}));

export default StyledLinearProgress;
