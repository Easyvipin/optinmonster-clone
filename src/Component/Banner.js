import React from "react";
import Neil from "../images/neilpateltiny.jpg";
import Green from "../images/green.svg";
const Banner = () => {
  return (
    <div className="container-2 banner">
      <img src={Green} alt="" className="banner-img" />
      <p className="large-p">
        The Powerful{" "}
        <strong>Customer Acquisition & Lead Generation Software</strong> ...
        Without the High Costs
      </p>
      <p className="medium-p">
        Join 1,000,000+ who get more subscribers and customers with
        OptinMonster.
      </p>
      <div className="rev">
        <span>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </span>
        <p className="small-p">
          <strong>Instant 10% lift</strong> in driving sales-Neil patel
        </p>
        <img src={Neil} alt="" className="icon-circle" />
      </div>
    </div>
  );
};

export default Banner;
