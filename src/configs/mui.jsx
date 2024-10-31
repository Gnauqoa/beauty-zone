import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { palettes } from "./constants";

const theme = createTheme({
  palette: palettes,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Montserrat", "Arial", sans-serif',
    h4: {
      fontWeight: 600, // Customize typography weight
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Customize button border radius
        },
      },
    },
  },
});

const MuiProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

MuiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MuiProvider;