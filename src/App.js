import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Box sx={{ minHeigh: "100vh" }}>
      <Navbar />
      <Home />
      <Footer />
    </Box>
  );
}

export default App;
