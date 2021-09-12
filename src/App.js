import React from "react";
import logo6 from "./6.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
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
          <div className="in">TravelGO</div>
          <div className="ain">
            TravelGO is designed to meet your travel needs with cheap and
            affordable packages. Choose the best package from our wide range of
            irresistible deals at your desired destination. So do not wait to
            explore the WORLD OF TRAVELLING. Click on the EXPLORE button to
            start your journey today.
          </div>
          <a className="bts" href="/package">
            <button className="button button1">EXPLORE</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
