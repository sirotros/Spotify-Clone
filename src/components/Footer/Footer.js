import React from "react";
import logo from "../../img/logo.svg";
import "./Footer.scss";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { Outlet } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <Outlet />
      <div className="container">
        <nav>
          <img src={logo} className="footer-logo" alt="spotify " />

          <div className="company">
            <h1>COMPANY</h1>
            <ul>
              <li>About</li>
              <li>Jobs</li>
              <li>For the Record</li>
            </ul>
          </div>
          <div className="communities">
            <h1>COMMUNITIES</h1>
            <ul>
              <li>For Artists</li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
          </div>
          <div className="useful-links">
            <h1>USEFUL LINKS</h1>
            <ul>
              <li>Support</li>
              <li>Web Player</li>
              <li>Free Mobile App</li>
              <li>Car Thing</li>
            </ul>
          </div>
          <div className="social-media">
            <a href="#">
              <BsInstagram className="icon" />
            </a>
            <a href="#">
              <BsTwitter className="icon" />
            </a>
            <a href="#">
              <BsFacebook className="icon" />
            </a>
          </div>
        </nav>
        <div className="footer-lowers">
          <ul className="footer-lower">
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Privacy Center</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">About Ads</a>
            </li>
            <li>
              <a href="#">Additional CA Privacy Disclosures</a>
            </li>
          </ul>
          <div className="info">
            <div className="location">
              <BiWorld /> USA
            </div>
            <div> © 2022 Spotify AB</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
