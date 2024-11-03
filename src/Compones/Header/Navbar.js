import React from "react";
import "./Navbar.css";
import logo1 from "../image/logo1.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="header">
        <div>
          <div>
            {" "}
            <Link to="/">
              <img src={logo1} className="App-logo" alt="logo" />
            </Link>
          </div>
        </div>
        <div className="h-name">
          <ul>
            {/* <a href="#Home"><li>Home</li></a> */}
            <Link to="/">
              {" "}
              <li>Home</li>
            </Link>
            <a href="/#About">
              {" "}
              <li>About</li>
            </a>
            <a href="#Course">
              <li>Course</li>
            </a>
            <li>Contact</li>
          </ul>
        </div>
        <div className="Butt">
          <button>Join Us</button>
        </div>
      </div>
    </>
  );
}
