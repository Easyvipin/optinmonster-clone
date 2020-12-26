import React from "react";
import Logo from "../images/Logo.svg";
const Header = () => {
  return (
    <header>
      <img src={Logo} className="logo-icon"></img>
      <button className="btn">Login</button>
    </header>
  );
};

export default Header;
