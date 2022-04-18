import React from "react";
import "./Bring.scss";
import apple from "../../img/apple.svg";
import googleplay from "../../img/googleplay.svg";
import microsoft from "../../img/microsoft.svg";
import amazon from "../../img/amazon.svg";
function Bring() {
  const images = [apple, googleplay, microsoft, amazon];
  return (
    <div className="bring">
      <div className="container">
        <h1>Bring your music to mobile and tablet, too.</h1>
        <p>Listening on your phone or tablet is free, easy, and fun.</p>
        <div className="companies">
          {images.map((img, i) => {
            return <img key={i} src={img} className="company" />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Bring;
