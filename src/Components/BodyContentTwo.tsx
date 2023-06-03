// import React, { useState } from "react";
// import {
//   Typography,
//   Button,
//   Box,
//   Grid,
//   useMediaQuery,
//   createTheme,
//   ThemeProvider,
// } from "@mui/material";

// const theme = createTheme();

// const MainPageThree = () => {
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   const [count,setCount]=useState(1)

//   const incrementHandler=()=>{setCount(count+1)}
//   const decrementHandler=()=>{
//    if(count>1){
//      setCount(count-1)
//    }
//    else{
//      setCount(1)
//    }
//   }

//   return (
//     <Box
//       className="main-page"
//       textAlign="center"
//       sx={{
//         bgcolor: "linear-gradient(#ffffff, #d3d3d3, #ffffff)",
//         py: 4,
//       }}
//     >
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Box textAlign="center">
//             <img
//                src="https://uxdn6dtijsctqzcsopj5nerpyyjqxjaxfjd72aswyoqjfc3u3hiq.arweave.net/pcbfDmhMhThkUnPT1pIvxhMLpBcqR_0CVsOgkot02dE?ext=gif"
//               alt="/"
//               width={isSmallScreen ? "50%" : "55%"}
//               height="530px"
//               style={{
//                 borderRadius: "15px",
//                 marginTop: isSmallScreen ? "20px" : 0,
//                 marginBottom: isSmallScreen ? "20px" : '20px',
//                 border:'15px solid white',
//                 maxWidth: "500px",
//                 maxHeight: "300px",
//               }}
//             />
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={3} color="black" marginTop='30px'>
//         <Box textAlign="left" px={4} backgroundColor="white" borderRadius="10px" sx={{ height: isSmallScreen ? "200px" : "200px",
//         width: isSmallScreen ? "50%" : "5%"}}
//          style={{
//           borderRadius: "20px",
//           marginTop: isSmallScreen ? "20px" : 0,
//           marginBottom: isSmallScreen ? "20px" : 0,
//           width: isSmallScreen ? "100%" : "100%",
//           padding: isSmallScreen ? "10px" : "",
//         }} >
//         <Typography
//               variant="h2"
//               mt={2}
             
//               sx={{
//                 fontSize: isSmallScreen ? "2rem" : "4rem",
//                 marginTop:'10px'
//               }}
//             >
//               <Button onClick={decrementHandler}><span style={{fontSize:'20px',color:'#12322a'}}>-</span></Button> <span style={{color:'#12322a'}}> {count} </span> <Button onClick={incrementHandler} style={{fontSize:'20px',color:'#12322a'}}>+</Button>
//             </Typography>
//   <Box display="flex" justifyContent={isSmallScreen ? "center" : "start"} mb={2}>
//     <Box mr={3}>
//       <Button
//         variant="contained"
//         href="#"
//         sx={{
//           width: 200,
//           background: "#13362d",
//           color: "white",
//           "&:hover": {
//             background: "#D3D3D3",
//             color: "black",
//           },
//           "&:focus": {
//             outline: "2px solid #9376E0",
//           },
//           borderRadius: "20px",
//           boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
//           fontSize: isSmallScreen ? "0.7rem" : "0.9rem",
//           marginBottom: "20px",
//           padding: "8px 16px",
//         }}
//       >
//         MINT
//       </Button>
//     </Box>
//   </Box>
// </Box>

// </Grid>

         
//       </Grid>
//     </Box>
//   );
// };

// const App = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <MainPageThree />
//     </ThemeProvider>
//   );
// };

// export default App;
