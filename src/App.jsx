import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import NoiseOverlay from "./components/NoiseOverlay";


// Import your new pages
import HomePage from './Home';
import Library from "./Library";

function App() {
  return (
    <div>
      <NoiseOverlay />

      {/* Navbar is outside <Routes> so it stays on every page */}
      <div className="relative z-40">
        <Navbar />
      </div>

      {/* Routes will switch the content based on the URL */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </main>

      {/* Footer can also be outside to appear on every page */}
      <div className="z-20 pt-28">
        <Footer />
      </div>
    </div>
  );
}

export default App;