import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <navbar className="navbar">
      <div className="logo">
        <a href="/">
          <span>CP</span>
        </a>
      </div>
      <div className="navigation">
        <link to="/Homepage.js">Home</link>
        <link to="/About.js">About</link>
        <link to="/Resume.js">Resume</link>
        <button
          onClick={() =>
            (window.location = "mailto:colette.joy.parker@gmail.com")
          }
          className="mailto"
        >
          Contact
        </button>
      </div>
    </navbar>
  );
}

export default Navbar;
