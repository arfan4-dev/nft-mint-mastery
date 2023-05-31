import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme();

const Footer = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        py: 2,
        mt: "auto",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        background: "linear-gradient(to right,#112823, #112B26)",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          variant="body2"
          align="center"
          color="white"
          sx={{
            fontSize: isSmallScreen ? "0.8rem" : "1rem",
          }}
        >
          © {new Date().getFullYear()} Your Website Name. All rights reserved.
        </Typography>
      </ThemeProvider>
    </Box>
  );
};

export default Footer;
