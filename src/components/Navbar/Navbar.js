import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import Search from "../../assets/icons/search.png";

const Navbar = () => {
  const [search, setSearch] = useState(false);

  const submitSearch = e => {
    e.preventDefault();
    alert("hey");
  };

  const openSearch = () => {
    setSearch(!search);
  };

  const searchClass = search ? "searchInput active" : "searchInput";

  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" placeholder="Search" className={searchClass} />
          <img
            src={Search}
            alt="Search"
            className="searchLogo"
            onClick={openSearch}
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
