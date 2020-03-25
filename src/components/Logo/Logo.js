import React from "react";

import { Link } from "react-router-dom";

import LogoImg from "../../assets/logo/logo.png";

import "./style.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={LogoImg} alt="Blog logo" className="logoImg" />
      </Link>
    </div>
  );
};

export default Logo;
