import { useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.scss";
import logo from "../../img/logo.svg";
function Header() {
  const [opening, setOpening] = useState(false);
  const menuRef = useRef(null);
  function menuOpen() {
    setOpening(!opening);
    if (opening) {
      menuRef.current.classList.add("open");
    } else {
      menuRef.current.classList.remove("open");
    }
  }
  return (
    <header>
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="Spotify Logo" />
        </a>
        <div className="menu" ref={menuRef} onClick={menuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="header-list">
          <li className="header-item">
            <a href="premium">Premium</a>
          </li>
          <li className="header-item">
            <a href="support">Support</a>
          </li>
          <li className="header-item">
            <a href="download">Download</a>
          </li>
          <li className="border"></li>
          <li className="header-item">
            <a href="signup">Sing up</a>
          </li>
          <li className="header-item">
            <a href="login">Log in</a>
          </li>
        </ul>
      </div>
      <Outlet />
    </header>
  );
}

export default Header;
