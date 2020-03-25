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

      <div className="socialMedia">
        <a href="https://twitter.com">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="fab fa-instagram-square"></i>
        </a>
        <a href="https://www.pinterest.com/">
          <i className="fab fa-pinterest-square"></i>
        </a>
        <a href="https://www.tumblr.com/">
          <i className="fab fa-tumblr-square"></i>
        </a>
        <a href="https://web.whatsapp.com/">
          <i className="fab fa-whatsapp-square"></i>
        </a>
        <a href="https://github.com/">
          <i className="fab fa-github-square"></i>
        </a>
        <a href="https://wwww.linkedin.com/">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
