import React, { useState, useEffect } from "react";
import { Link, UseNavigate } from "react-router-dom";
import axios from "axios";
import TopNavBar from "../components/TopNavBar";
import EmailButton from "../components/EmailButton";

const HomePage = () => {
  const emailAddress = "loadmesomethingmr@gmail.com";

  return (
    <div className="home">
      <header className="header">
        <TopNavBar />
      </header>
      <main className="main">
        <h1 className="main__heading">Load Me Something, Mister!</h1>
        <p className="main__text">
          Reliable Dispatch Services for Truckers. Maximize Your Profitability &
          Minimize Downtime. Build Trust with Us.
        </p>
        <EmailButton email={emailAddress} />
      </main>
      <footer className="footer">
        <div className="footer__contact">
          <h4>Contact Us</h4>
          <p>
            Email:{" "}
            <a href="mailto:loadmesomethingmr@gmail.com">
              loadmesomethingmr@gmail.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+13182642314">(318) 264-2314</a>
          </p>
          <p>Hours: Mon-Fri 8am-8pm CST</p>
          <p className="footer__text">
            © 2023 LoadMeSomething. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;