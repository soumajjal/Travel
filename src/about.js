import React from "react";
import logo6 from "./6.jpg";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Apps = () => {
  return (
    <React.Fragment>
      <div>
        <img className="img" src={logo6} alt="6" />
      </div>
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">TravelGO</div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="/" >
            Home
          </a>
          <a href="/about" >
            AboutUs
          </a>
          <a href="/package" >
            Packages
          </a>
          <a href="/book" >
            BookNow
          </a>
          <a href="/contact">
            ContactUs
          </a>
        </div>
      </div>
      <div className="main">
        <div className="bin">
          <div className="in">AboutUs</div>
          <div className="ain">
            TravelGO helps users make the most of what they spend on travel. We
            give travelers engineered packages that keep them safe and
            productive and help them make good choices on the road. We simplify
            the complexities of business travel, drive savings and satisfaction
            and move whole companies toward their goals. In short, we help our
            clients travel smart and achieve more.
          </div>
          <a className="bts" href="/contact">
            <button className="button button1">ContactUs</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Apps;
