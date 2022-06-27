import React from "react";
import "./SignUp.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logoDark.svg";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function SignUp() {
  return (
    <form className="container">
      <Link to="/">
        <img src={logo} alt="logo" className="spotify-logo"/>
      </Link>
      <h2>Sign up for free to start listening.</h2>
      <button href="#" className="btn-facebook">
        <AiFillFacebook className="facebook-icon" /> Sign up with Facebook
      </button>
      <button href="#" className="btn-google">
        <FcGoogle className="google-icon" /> Sign up with Google
      </button>
      <span className="or">or</span>
      <h5>Sign up with your email address</h5>
      <div className="input-group">
        <label htmlFor="email">What's your email?</label>
        <input
          type="email"
          className="email"
          id="email"
          placeholder="Enter your email."
        />
      </div>
      <div className="input-group">
        <label htmlFor="comfirmEmail">Comfirm your email?</label>
        <input
          type="email"
          className="comfirmEmail"
          id="comfirmEmail"
          placeholder="Enter your email again"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Create a password</label>
        <input
          type="password"
          className="password"
          id="password"
          placeholder="Create a password"
        />
      </div>
      <div className="input-group">
        <label htmlFor="profileName">What should we call you?</label>
        <input
          type="text"
          className="profileName"
          id="profileName"
          placeholder="Enter a profile name."
        />
        <span className="info"> This appears on your profile.</span>
      </div>
      <div className="input-group">
        <h6 className="date">What's your date of birth?</h6>
        <div className="calender">
          <div className="month">
            <label htmlFor="month" id="monthLabel">
              Month
            </label>
            <select name="month" id="month">
              <option value="month">Month</option>
              {months.map((month) => {
                return <option value={month}>{month}</option>;
              })}
            </select>
          </div>
          <div className="day">
            <label htmlFor="day">Day</label>
            <input type="text" placeholder="DD" id="day" />
          </div>
          <div className="year">
            <label htmlFor="year">Year</label>
            <input type="text" id="year" placeholder="YYYY" />
          </div>
        </div>
      </div>
      <div className="input-group">
        <h4>What's your gender?</h4>
        <div className="gender">
          <div className="genderOption">
            <input type="radio" name="male" id="male" />{" "}
            <label htmlFor="male">Male</label>
          </div>
          <div className="genderOption">
            <input type="radio" name="female" id="female" />{" "}
            <label htmlFor="female">Female</label>
          </div>
          <div className="genderOption">
            <input type="radio" name="non-binary" id="non-binary" />{" "}
            <label htmlFor="non-binary">Non-binary</label>
          </div>
        </div>
      </div>
      <div className="input-group share">
        <input type="checkbox" id="share" />
        <label htmlFor="share" id="shareInfo">
          Share my registration data with Spotify's content providers for
          marketing purposes.
        </label>
      </div>
      <div className="form-footer">
        <p>
          By clicking on sign-up, you agree to Spotify's{" "}
          <a href="#">Terms and Conditions of Use.</a>
        </p>
        <p>
          To learn more about how Spotify collects, uses, shares and protects
          your personal data, please see{" "}
          <a href="#">Spotify's Privacy Policy.</a>
        </p>
        <button className="btn">Sign up</button>
        <p className="account">
          Have an account? <a href="#">Log in</a>.
        </p>
      </div>
    </form>
  );
}

export default SignUp;
