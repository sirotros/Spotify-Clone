import React from "react";
import "./Category.scss";
function Category() {
  return (
    <div className="category">
      <div className="container">
        <ul className="payment">
          <h1>Payment Help </h1>
          <li className="payment-item">Manage payments</li>
          <li className="payment-item">Payment methods</li>
          <li className="payment-item">Charge help</li>
        </ul>
        <ul className="plan">
          <h1>Plan Help </h1>
          <li className="plan-item">Available plans</li>
          <li className="plan-item">Plan settings</li>
          <li className="plan-item">Premium Family &#38; Kids</li>
          <li className="plan-item">Premium Duo</li>
          <li className="plan-item">Premium Student</li>
        </ul>
        <ul className="app">
          <h1>App Help </h1>
          <li className="app-item">Getting started</li>
          <li className="app-item">App settings</li>
          <li className="app-item">Troubleshooting</li>
          <li className="app-item">Playlists</li>
          <li className="app-item">Features</li>
          <li className="app-item">Social features</li>
          <li className="app-item">Voice assistants</li>
        </ul>
        <ul className="device">
          <h1>Device Help </h1>
          <li className="device-item">Speakers</li>
          <li className="device-item">Smart watches</li>
          <li className="device-item">TVs</li>
          <li className="device-item">Gaming</li>
          <li className="device-item">Cars</li>
          <li className="device-item">Car Thing</li>
        </ul>
        <ul className="data">
          <h1>Data &#38; Privacy </h1>
          <li className="data-item">Listening privacy</li>
          <li className="data-item">Data and privacy info</li>
        </ul>
        <ul className="account">
          <h1>Account Help </h1>
          <li className="account-item">Logging In</li>
          <li className="account-item">Profile Help</li>
          <li className="account-item">Account settings</li>
          <li className="account-item">Security</li>
        </ul>
      </div>
    </div>
  );
}

export default Category;
