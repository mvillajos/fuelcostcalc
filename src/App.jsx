// import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Components/Navbar";
import SliderPanel from "./Components/SliderPanel";

// import { getPrevNumDiv10, getNextNumDiv10 } from "./userFunctions";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Container maxWidth="lg" sx={{ marginTop: 1 }}>
        {/* <Grid container spacing={5} alignItems="center"> */}
        {/* <Grid item xs={12} md={6}> */}
        <SliderPanel />
        {/* </Grid> */}
        {/* </Grid> */}
      </Container>
    </div>
  );
}

export default App;
