import React from "react";
import logo from "../../img/logoDark.svg";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import "./Login.scss";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img src={logo} className="logo" alt="spotify logo" />
      </Link>
      <div className="borderHeader"></div>
      <div className="loginToContinue">To continue, log in to Spotify.</div>
      <div className="buttons">
        <button className="btnFacebook">
          <AiFillFacebook className="icon" />
          CONTINUE WITH FACEBOOK
        </button>
        <button className="btnApple">
          <AiFillApple className="icon" />
          CONTINUE WITH APPLE
        </button>
        <button className="btnGoogle">
          <FcGoogle className="icon" />
          CONTINUE WITH GOOGLE
        </button>
      </div>
      <div className="or">OR</div>

      <form>
        <div className="input-group">
          <label htmlFor="email">Email address or username</label>
          <input type="text" placeholder="Email address or username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="text" placeholder="Password" />
        </div>
        <a href="#" className="forgot">
          Forgot your password?
        </a>
        <div className="form-footer">
          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button className="btn">LOG IN</button>
        </div>
      </form>
      <div className="border"></div>
      <p>Don't have an account?</p>
      <button className="btnFor">SIGN UP FOR SPOTIFY</button>
    </div>
  );
}

export default Login;
