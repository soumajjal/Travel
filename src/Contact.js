import React from "react";
import logo6 from "./6.jpg";
import "./contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
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
          <a href="/">Home</a>
          <a href="/about">AboutUs</a>
          <a href="/package">Packages</a>
          <a href="/book">BookNow</a>
          <a href="/contact">ContactUs</a>
        </div>
      </div>
      <div className="main">
        <div className="bin">
          <div className="in">ContactME</div>
          <div className="ain">
            Myself Soumajjal Kundu, a second-year BTech undergraduate from NIT
            Durgapur built this website with a vision of easy traveling.
            <br />
            <br />
            For any collaboration or queries free feel to drop an E-mail at
            soumajjal@gmail.com or feel free to ring me up at 9874785761.
          </div>
          <a className="bts" href="/book">
            <button className="button button1">BOOK</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
