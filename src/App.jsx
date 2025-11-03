import React, { useRef, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Plans from "./pages/Plans";
import Why from "./pages/Why";
import Footer from "./pages/Footer";


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const plansRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    setMenuOpen(false);
    if (ref.current) {
      ref.current.scrollIntoView({behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Navbar lives inside Home and gets handleScroll */}
      <Home
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        handleScroll={handleScroll}
        refs={{ homeRef, aboutRef, servicesRef, plansRef, contactRef }}
      />
      <div ref={aboutRef}><About /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={plansRef}><Plans /></div>
      <div ref={contactRef}><Why /></div>
      <Footer />
    </div>
  );
};

export default App;
