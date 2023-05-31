import React from "react";
import {
  Typography,
  Button,
  Box,
  Grid,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme();

const MainPage: React.FC = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      className="main-page"
      textAlign="center"
      sx={{
        bgcolor: "linear-gradient(#ffffff, #d3d3d3, #ffffff)",
        py: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} color="white">
          <Box textAlign="left" px={4}>
            <Typography
              variant="h2"
              mb={2}
              sx={{
                fontSize: isSmallScreen ? "2rem" : "4rem",
              }}
            >
              <strong>
                NFT
                <br />
                MINT PAGE
              </strong>
            </Typography>
            <Typography
              variant="h4"
              mb={2}
              sx={{
                fontSize: isSmallScreen ? "1.5rem" : "3rem",
              }}
            >
              BlockChain
            </Typography>
            <Typography
              variant="body1"
              mb={2}
              sx={{
                fontSize: isSmallScreen ? "1rem" : "1.2rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur alias aliquam aliquid maiores praesentium delectus
              aspernatur incidunt. Nam quidem saepe voluptates ut corrupti
              ducimus, autem illum libero laudantium, repellat ratione?
            </Typography>
            <Box
              display="flex"
              justifyContent={isSmallScreen ? "center" : "start"}
              mb={2}
            >
              {/* Updated Box component */}
              <Box>
                <Button
                  variant="contained"
                  href="#"
                  sx={{
                    width: 200,
                    background: "#112a25",
                    color: "white",
                    "&:hover": {
                      background: "#f5f5f5",
                      color: "black",
                    },
                    "&:focus": {
                      outline: "2px solid #9376E0",
                    },
                    outline: "2px solid black",
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
                    fontSize: isSmallScreen ? "0.9rem" : "1rem",
                    marginBottom: "20px",
                  }}
                >
                  mint now
                </Button>
              </Box>
              <Box ml={isSmallScreen ? 0 : 2} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <img
              src="https://rent.cardinal.so/logos/atom-hero.jpg"
              alt="/"
              width={isSmallScreen ? "80%" : "100%"}
              height="auto"
              style={{
                borderRadius: "20px",
                marginTop: isSmallScreen ? "20px" : 0,
                marginBottom: isSmallScreen ? "20px" : 0,
                maxWidth: "500px",
                maxHeight: "300px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
