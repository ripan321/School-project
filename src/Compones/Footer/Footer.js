import React from "react";
import "./Footer.css";
import logo from "../image/logo1.png";
import youtube from "../image/youtube.svg";
import instra from "../image/instagram.png";
import fb from "../image/facebook.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-foot">
        <div className="l-footer">
          <div className="l-foot">
            <div>
              <Link to="/">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </div>
            <div>
              <b>About Us</b>
            </div>
            <div className="l-foot-con">
              <ul>
                <li>About</li>
                <li>Course</li>
                <li>Contact</li>
                <li>Vision and Mission</li>
              </ul>
            </div>
            <div className="s-icon">
              <img src={youtube} className="s-logo" alt="logo" />
              <img src={instra} className="s-logo" alt="logo" />
              <img src={fb} className="s-logo" alt="logo" />
            </div>
          </div>

          <div className="r-foot">
            <div>
              <b>Information</b>
            </div>
            <div className="l-foot-con">
              <ul>
                <li>Campus News</li>
                <li>History</li>
                <li>Feedback</li>
                <li>Help Center</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="line1"></hr>

        <div className="r-footer">
          <div className="l-foot">
            <div>
              <b>Subjects</b>
            </div>
            <div className="l-foot-con">
              <ul>
                <li>Computer Science</li>
                <li>Code Foundations</li>
                <li>Developer Tools</li>
                <li>Programing</li>
                <li>Web Design</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>

          <div className="r-foot">
            <div>
              <b>Languages</b>
            </div>
            <div className="l-foot-con">
              <ul>
                <li>HTML & CSS</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Assamese</li>
                <li>English</li>
                <li>Hindi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="line"></hr>
      <div className="bottom-foot">
        <div className="b-l-foot">
          <div className="policy">Privacy Policy</div>
          <div className="policy">Cookie Policy</div>
          <div className="policy">Terms</div>
        </div>
        <div className="b-r-foot">
          <div className="b-r-foot-p">© Copyright 2022 JBB</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
