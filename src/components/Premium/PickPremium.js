import React from "react";
import { BsCheck } from "react-icons/bs";
import visa from "../../img/visa.svg";
import mastercard from "../../img/mastercard.svg";
import americanExpress from "../../img/americanExpress.svg";
import discover from "../../img/discover.svg";
import paypal from "../../img/paypal.svg";
import "./PickPremium.scss";

function PickPremium() {
  const premiumData = [
    {
      promotion: "3 months free",
      title: "Individual",
      price: "$9.99/month after offer period",
      account: "1 account",
      features: [
        "ad-free music listening",
        "play anywhere - even ofline",
        "on-demand playback",
      ],
      button: "GET STARTED",
      info: "Individual plan only. $9.99/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends 12 May 2022.",
    },
    {
      promotion: "1 months free",
      title: "Duo",
      price: "$12.99/month after offer period",
      account: "2 account",
      features: [
        "2 Premium accounts for a couple under one roof",
        "Ad-free music listening, play offline, on-demand playback",
      ],
      button: "GET STARTED",
      info: "Terms and conditions apply. 1 month free not available for users who have already tried Premium.",
    },
    {
      promotion: "3 months free",
      title: "Individual",
      price: "$9.99/month after offer period",
      account: "1 account",
      features: [
        "ad-free music listening",
        "play anywhere - even ofline",
        "on-demand playback",
      ],
      button: "GET STARTED",
      info: "Individual plan only. $9.99/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends 12 May 2022.",
    },
    {
      promotion: "3 months free",
      title: "Individual",
      price: "$9.99/month after offer period",
      account: "1 account",
      features: [
        "ad-free music listening",
        "play anywhere - even ofline",
        "on-demand playback",
      ],
      button: "GET STARTED",

      info: "Individual plan only. $9.99/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends 12 May 2022.",
    },
  ];
  const banks = [visa, mastercard, americanExpress, discover, paypal];
  return (
    <div className="pick-premium">
      <div className="container">
        <h1>Pick your Premium</h1>
        <p className="pick-title">
          Listen without limits on your phone, speaker, and other devices.
        </p>
        <div className="logos">
          {banks.map((bank) => {
            return <img src={bank} className="bankIcon" alt="bank" />;
          })}
        </div>
        <div className="cards">
          {premiumData.map((data) => {
            return (
              <div className="card">
                <div className="promotion">{data.promotion}</div>
                <div className="title"> {data.title} </div>
                <div className="price"> {data.price} </div>
                <div className="account"> {data.account} </div>
                <div className="border"></div>
                <ul className="features">
                  {data.features.map((feature, i) => {
                    return (
                      <li className="feature" key={i}>
                        <BsCheck className="icon" /> {feature}
                      </li>
                    );
                  })}
                </ul>
                <a href="#" className="btn">
                  {data.button}
                </a>
                <p> {data.info} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PickPremium;
