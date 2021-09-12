import React from "react";
import logo5 from "./5.jpg";
import "./book.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "@formspree/react";

const Book = () => {
  const [state, handleSubmit] = useForm("xvodlppq");
  if (state.succeeded) {
    return <p>THANKS FOR BOOKING. WE WILL CONTACT YOU SOON!</p>;
  }
  return (
    <React.Fragment>
      <div>
        <img className="img" src={logo5} alt="5" />
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
          <a href="/contact" >
            ContactUs
          </a>
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label for="fname">Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your first name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Phone Number</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your Phone Number.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="Destination">Destination</label>
            </div>
            <div className="col-75">
              <select id="country" name="country">
                <option value="Kolkata">Kolkata</option>
                <option value="Kerala">Kerala</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Goa">Goa</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Ladhak">Ladhak</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="kanyakumari">Kanyakumari</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="subject">Package NO</label>
            </div>
            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Package number.."
              ></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" disabled={state.submitting} />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Book;
