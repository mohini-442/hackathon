// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/nav";
import MyProjects from "./pages/MyProjects";
import "./App.css";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const hidePreloader = () => {
    setShowPreloader(false);
  };
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="gradient">
      <Router>
        <Nav />
        {showPreloader && <Preloader hidePreloader={hidePreloader} />}
        <Routes className="gradient">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<MyProjects />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
