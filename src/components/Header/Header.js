import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <div className="socialMedia">Social Media Icons</div>
    </header>
  );
};

export default Header;
