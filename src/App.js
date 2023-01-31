import { Box } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Box sx={{ minHeigh: "100vh" }}>
      <Navbar />
      <Home />
    </Box>
  );
}

export default App;
