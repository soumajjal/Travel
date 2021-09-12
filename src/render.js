import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import App from "./App";
import Apps from "./about";
import Book from "./book";
import Contact from "./Contact";
import Package from "./package";
// import People from "./People";
// import Error from "./Error";
// import Person from "./Person";
// // navbar
// import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/about">
          <Apps />
        </Route>
        <Route exact path="/book">
          <Book />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/package">
          <Package />
        </Route>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:id" children={<Person />}></Route>
        <Route path="*">
          <Error />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
