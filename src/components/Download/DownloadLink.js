import React from "react";
import "./DownloadLink.scss";
import laptop from "../../img/laptop.svg";
function DownloadLink() {
  return (
    <div className="link">
      <div className="container">
        <img src={laptop} alt="laptop" className="laptop" />
        <h1>Download Spotify</h1>
        <p>Play millions of songs and podcasts on your device.</p>
        <a href="#" className="btn">
          Download
        </a>
      </div>
    </div>
  );
}

export default DownloadLink;
