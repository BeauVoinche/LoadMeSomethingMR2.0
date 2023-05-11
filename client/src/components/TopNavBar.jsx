import React from "react";
import img from "../assets/image2.jpeg";
import PhoneButton from "./PhoneButton";

function TopNavBar() {
const phoneNumber = "+13182642314";

  return (
    <nav className="top-nav">
      <div className="top-nav__brand">
        <a href="/">
          <img src={img} alt="LoadMeSomething" />
        </a>
      </div>
      <ul className="top-nav__menu">
        <li className="top-nav__item">
          <a href="/" className="top-nav__link">
            Home
          </a>
        </li>
        <li className="top-nav__item">
          <a href="/about" className="top-nav__link">
            About
          </a>
        </li>
        <li className="top-nav__item">
          <a href="/pricing" className="top-nav__link">
            Plans & Prices
          </a>
        </li>
        <li className="top-nav__item">
          <PhoneButton phoneNumber={phoneNumber} />
        </li>
      </ul>
    </nav>
  );
}

export default TopNavBar;