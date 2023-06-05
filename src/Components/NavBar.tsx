import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import WalletIcon from "@mui/icons-material/Wallet";
import Image from "next/image";
import logo from "public/logo.png";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";

const theme = createTheme();

const NavBar = () => {
  const isXSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isCustomSize = useMediaQuery(
    "(min-width: 300px) and (max-width: 470px)"
  );

  return (
    <Box sx={{ margin: "20px 40px" }}>
      <AppBar
        position="static"
        className="header"
        sx={{
          padding: "4px",
          borderRadius: "10px",
          background: "rgba(245, 245, 245,0)",
          boxShadow: "none", // Remove the box shadow
        }}
      >
        <Toolbar>
          <IconButton
            size={isXSmallScreen ? "small" : isSmallScreen ? "medium" : "large"}
            edge="start"
            aria-label="logo"
          >
            <Image
              src={logo}
              alt="Logo"
              width={   isCustomSize ? 70: isXSmallScreen ? 100 : isSmallScreen ? 120 : 200
              }
              height={
                isCustomSize
                  ? 30
                  : isXSmallScreen
                  ? 40
                  : isSmallScreen
                  ? 60
                  : 100
              }
              style={{ maxWidth: "100%" }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: isCustomSize
                ? "0.6rem"
                : isXSmallScreen
                ? "0.8rem"
                : isSmallScreen
                ? "1rem"
                : "inherit",
            }}
          ></Typography>
          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              sx={{
                background: "#D3D3D3",
                color: "#112B26",
                "&:hover": {
                  background: "#f5f5f5",
                },
                "&:focus": {
                  outline: "2px solid #9376E0",
                },
                minWidth: 0,
                whiteSpace: "nowrap",
                fontSize: isCustomSize
                  ? "0.6rem"
                  : isXSmallScreen
                  ? "0.8rem"
                  : isSmallScreen
                  ? "0.9rem"
                  : "inherit",
                padding: isCustomSize
                  ? "2px 4px"
                  : isXSmallScreen
                  ? "4px 8px"
                  : isSmallScreen
                  ? "6px 12px"
                  : "8px 16px",
                borderRadius: "20px",
              }}
              startIcon={
                <WalletIcon
                  sx={{
                    fontSize: isCustomSize
                      ? "1rem"
                      : isXSmallScreen
                      ? "1.2rem"
                      : isSmallScreen
                      ? "1.4rem"
                      : "inherit",
                  }}
                />
              }
            >
              Connect wallet
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
};

export default App;
