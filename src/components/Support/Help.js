import React from "react";
import "./Help.scss";
import { BsSearch } from "react-icons/bs";
function Help() {
  return (
    <div className="help">
      <div className="container">
        <h1>How can we help you?</h1>
        <div className="input-group">
          <BsSearch className="search-icon" />
          <input type="text" placeholder="Search" className="input" />
        </div>
        <ul>
          <h5>TOP SOLUTIONS</h5>
          <li>
            <h4>LOGGING IN</h4>
            <p>Can't reset password</p>
          </li>
          <li>
            <h4>TROUBLESHOOTING</h4>
            <p>My account doesn't look right</p>
          </li>
          <li>
            <h4>LOGGING IN</h4>
            <p>Can't remember login details</p>
          </li>
          <li>
            <h4>AVAILABLE PLANS</h4>
            <p>Start or join Family plan</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
