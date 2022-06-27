import React from "react";
import image from "../../img/premium.jpg";
import "./getPremium.scss";

function GetPremium() {
  return (
    <div className="premium">
      <div className="container">
        <div className="content-wrapper">
          <p className="title">Get 3 months of Premium for free</p>
          <p className="content">
            Enjoy ad-free music listening, offline playback, and more. Cancel
            anytime.
          </p>
          <div className="buttons">
            <a href="#" className="getFree">
              GET 3 MONTHS FREE
            </a>
            <a href="#" className="btn">
              VIEW PLANS
            </a>
          </div>
          <p className="subtitle">
            Individual plan only. $9.99/month after. Terms and conditions apply.
            Open only to users who haven't already tried Premium. Offer ends 12
            May 2022.
          </p>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default GetPremium;
