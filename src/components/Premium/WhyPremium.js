import React from "react";
import "./WhyPremium.scss";
import music from "../../img/play.png";
import ad from "../../img/ad.png";
import play from "../../img/play.png";
import unlimited from "../../img/unlimited.png";

function WhyPremium() {
  return (
    <div className="whyPremium">
      <div className="container">
        <h1>Why go Premium?</h1>
        <ul>
          <li>
            <img src={music} alt="music" />
            <div className="content">
              <p>Download music</p>
              <p>listen anywhere</p>
            </div>
          </li>
          <li>
            <img src={ad} alt="music" />
            <div className="content">
              <p>Ad-free music listening.</p>
              <p>Enjoy nonstop music.</p>
            </div>
          </li>
          <li>
            <img src={play} alt="music" />
            <div className="content">
              <p>Play any song.</p>
              <p>Even on mobile.</p>
            </div>
          </li>
          <li>
            <img src={unlimited} alt="music" />
            <div className="content">
              <p>Unlimited skips.</p>
              <p>Just hit next.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WhyPremium;
