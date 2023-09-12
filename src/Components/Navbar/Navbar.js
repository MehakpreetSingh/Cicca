import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { headings } from "./constant";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="LogoLinks">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`links ${isMenuOpen ? "open" : ""}`}>
          {Array.isArray(headings) &&
            headings.length > 0 &&
            headings.map((item) => <a href="/">{item?.heading}</a>)}
        </div>
      </div>
      <div className="button">
        <button>Start Building</button>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
