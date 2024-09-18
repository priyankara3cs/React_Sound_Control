import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import GooBlobs from "./components/goo-blobs";
import SandBox from "./components/sandbox";
import LoadAnimation from "./components/load-animation";
import Test from "./components/test";
import ListPages from "./components/ListPages/list-pages";
import Hero from "./components/Hero";
import Boll from "./components/boll";
import Page from "./components/FunnyAnimation";

import { SoundProvider } from "./components/SoundContext"; // Import SoundProvider

function App() {
  return (
    <SoundProvider>
      {/* Wrap the app in SoundProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/goo-blobs" element={<GooBlobs />} />
          <Route path="/sandbox" element={<SandBox />} />
          <Route path="/load-animation" element={<LoadAnimation />} />
          <Route path="/test" element={<Test />} />
          <Route path="/list-pages" element={<ListPages />} />
          <Route path="/hero" element={<Hero />} />
          {/* Render Boll component directly */}
          <Route path="/boll" element={<Boll />} />
          <Route path="/funny-animation" element={<Page />} />
        </Routes>
      </Router>
      <Footer />
    </SoundProvider>
  );
}

export default App;
