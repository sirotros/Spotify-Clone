import React from "react";
import "./Home.scss";
import image from "../../img/premium.jpg";

function Home() {
  return (
    <section className="home">
      <div className="premium">
        <div className="container">
          <div className="premium-info">
            <p className="premium-title">SPOTIFY PREMIUM</p>
            <h1 className="premium-sub-title">
              Get 3 months of Premium for free
            </h1>
            <p className="premium-content">
              Enjoy ad-free music listening, offline playback, and more. Cancel
              anytime.
            </p>
            <a href="#" className="btn">
              GET 3 MONTHS FREE
            </a>
            <p className="premium-sub-content">
              Individual plan only. $9.99/month after. Terms and conditions
              apply. Open only to users who haven't already tried Premium. Offer
              ends 12 May 2022.
            </p>
          </div>
          <img src={image} alt="premium image" className="premium-image" />
        </div>
      </div>
      <div className="free">
        <div className="container">
          <p className="title">SPOTIFY FREE</p>
          <h1>Listening is everything</h1>
          <p className="content">
            Millions of songs and podcasts. No credit card needed.
          </p>
          <a href="#" className="btn">
            GET SPOTIFY FREE
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
