import React from "react";
import Sec from "../images/sec.png";
const Footer = () => {
  return (
    <footer className="container-2">
      <p>
        Copyright © 2013 - 2020 Retyp, LLC. OptinMonster®, Exit Intent®, OnSite
        Retargeting® and OnSite Follow Up Campaign® are registered trademarks of
        Retyp, LLC.
      </p>
      <img className="icon-sec" src={Sec} alt="" />
    </footer>
  );
};

export default Footer;
