import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo1 from "../image/logo1.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const manuRef = useRef();
  const location = useLocation();

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (manuRef.current && !manuRef.current.contains(e.target)) {
        setIsOpen(false); // Close menu if click is outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <div className="header">
        <div>
          <Link to="/">
            <img src={logo1} className="App-logo" alt="logo" />
          </Link>
        </div>

        <div className="h-name">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/class"><li>Class</li></Link>
            <Link to="/computer"><li>Computer</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
          </ul>
        </div>

        <div className="manu-bar">
          {/* Toggle isOpen state when clicking Hamburger */}
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={18} />
        </div>

        <div className="Butt">
          <Link to='/login'><button>Log In</button></Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={isOpen ? "manu" : "none"}
        ref={manuRef}
      >
        <ul onClick={() => setIsOpen(false)}> {/* Close on link click */}
          <Link to="/"><li>Home</li></Link>
          <Link to="/class"><li>Class</li></Link>
          <Link to="/computer"><li>Computer</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/login"><li>Log In</li></Link>
        </ul>
      </motion.div>
    </>
  );
}
