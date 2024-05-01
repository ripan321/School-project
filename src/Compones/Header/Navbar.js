import React from "react";
import "./Navbar.css";
import logo1 from "./logo1.png";

export default function Navbar() {
  return (
    <>
      <div className="header">
        <div>
          <div>
            {" "}
            <img src={logo1} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="h-name">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Course</li>
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
