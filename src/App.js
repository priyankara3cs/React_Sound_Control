import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import { SoundProvider } from "./components/SoundContext"; // Import SoundProvider instead of SoundContextProvider

function App() {
  return (
    <SoundProvider>
      {/* Wrap the app in SoundProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </SoundProvider>
  );
}

export default App;
