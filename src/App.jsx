import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Info from "./components/InfoSection.jsx";
import About from "./components/AboutSection.jsx";
import Interest from "./components/InterestSection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div id="card-container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
