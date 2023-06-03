import React, { useState } from "react";
import Image from "next/image";
import {
  Typography,
  Button,
  Box,
  Grid,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  colors,
} from "@mui/material";

const theme = createTheme();


const MainPageTwo: React.FC = () => {
  const logo="https://uxdn6dtijsctqzcsopj5nerpyyjqxjaxfjd72aswyoqjfc3u3hiq.arweave.net/pcbfDmhMhThkUnPT1pIvxhMLpBcqR_0CVsOgkot02dE?ext=gif"
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
 const [count,setCount]=useState(1)

 const incrementHandler=()=>{setCount(count+1)}
 const decrementHandler=()=>{
  if(count>1){
    setCount(count-1)
  }
  else{
    setCount(1)
  }
 }
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
      <Grid container spacing={2} >
        <Grid item xs={8} md={6} mr={15}>
          <Box textAlign="right">
            <img
              src={logo}
              alt="/"
              width={isSmallScreen ? "90%" : "70%"}
              height="360px"
              style={{
                borderRadius: "20px",
                border:'10px solid white',
                marginTop: isSmallScreen ? "10px" : 0,
                marginBottom: isSmallScreen ? "10px" : 0,
                marginLeft: isSmallScreen ? "60px" : "",
                maxWidth: "640px",
                maxHeight: "500px",
              }}
            />
          </Box>
        </Grid>
        <div className="col-md-3 col-sm-3" style={{marginTop: isSmallScreen ? "90px" : "30px", justifyContent: isSmallScreen ? '' : "center"}}>
  <div style={{backgroundColor: "white", width: '310px', height: "150px", textAlign: "center", borderRadius: '10px', marginLeft: isSmallScreen ? "50px" : ""}}>
    <div className="content text-center" style={{fontSize: '1rem', marginTop: '20px'}}>
      <div style={{color: '#102420'}}>
        <Button style={{fontSize: '1.5rem', marginTop: '20px',color: '#102420'}} onClick={decrementHandler}>-</Button> 
        <span style={{fontWeight: 'bold', fontSize: '30px'}}> {count}</span> 
        <Button style={{fontSize: '1.5rem', marginTop: '20px',color: '#102420'}} onClick={incrementHandler}>+</Button>
      </div>
      <div>
        <Button
          variant="contained"
          href="#"
          sx={{
            borderRadius: "20px",
            width: 200,
            background: "#112a25",
            color: "white",
            "&:hover": {
              background: "#f5f5f5",
              color: "black",
            },
            "&:focus": {
              outline: "2px solid #a3a3a3",
            },
            outline: "1px solid black",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
            fontSize: isSmallScreen ? "0.9rem" : "1rem",
            marginTop: "20px",
          }}
        >
          MINT NOW
        </Button>
      </div>
    </div>
  </div>
  <div style={{textAlign: "center", fontSize: '1.5rem', color: "white",marginLeft: isSmallScreen ? "50px" : ""}}>
    <strong>4999/4999 minted</strong> <br />
    <strong>Sold Out!</strong>
  </div>
</div>
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
