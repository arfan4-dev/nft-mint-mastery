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

const MainPageTwo: React.FC = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      className="main-page"
      textAlign="center"
      sx={{
        bgcolor: "linear-gradient(#ffffff, #d3d3d3, #ffffff)",
        py: 4,
        marginBottom: "100px", // add marginBottom here
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <img
              src="https://uxdn6dtijsctqzcsopj5nerpyyjqxjaxfjd72aswyoqjfc3u3hiq.arweave.net/pcbfDmhMhThkUnPT1pIvxhMLpBcqR_0CVsOgkot02dE?ext=gif"
              alt="/"
              width={isSmallScreen ? "80%" : "100%"}
              height="230px"
              style={{
                borderRadius: "20px",
                marginTop: isSmallScreen ? "20px" : 0,
                marginBottom: isSmallScreen ? "20px" : 0,
                maxWidth: "640px",
                maxHeight: "300px",
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5.3}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginLeft: isSmallScreen ? "30px" : "",
            marginRight: isSmallScreen ? "10px" : "",
          }}
          my={2}
        >
          <Box
            style={{
              borderRadius: "20px",
              marginTop: isSmallScreen ? "20px" : 0,
              marginBottom: isSmallScreen ? "20px" : 0,
              width: isSmallScreen ? "100%" : "100%",
              padding: isSmallScreen ? "10px" : "",
            }}
            textAlign="left"
            px={4}
            my={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="auto"
          >
            <Typography
              variant="h2"
              mb={2}
              sx={{
                fontSize: isSmallScreen ? "2rem" : "4rem",
              }}
            >
              <strong>- 1 +</strong>
            </Typography>
            <Typography
              variant="h4"
              mb={2}
              sx={{
                fontSize: isSmallScreen ? "1.5rem" : "3rem",
                marginTop: "10px", // add marginTop for space
              }}
            ></Typography>
            <Typography
              variant="body1"
              mb={2}
              sx={{
                fontSize: isSmallScreen ? "1rem" : "1.2rem",
              }}
            ></Typography>
            <Box
              display="flex"
              justifyContent={isSmallScreen ? "center" : "start"}
              mb={2}
            >
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
                  mint
                </Button>
              </Box>
              <Box ml={isSmallScreen ? 0 : 2} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainPageTwo />
    </ThemeProvider>
  );
};

export default App;
