import React from "react";
import { Link } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import EmailButton from "../components/EmailButton";
import PricingCard from "../components/PricingCard";

import img from "../assets/Robert3.jpg";
import img2 from "../assets/Jack2.jpg";

const CompletePage = () => {
  const emailAddress = "loadmesomethingmr@gmail.com";

  const teamMembers = [
    {
      name: "Robert Bennett",
      title: "Owner/Dispatcher",
      bio: "",
      image: img,
    },
    {
      name: "Jack Miller",
      title: "Owner/Dispatcher",
      bio: "",
      image: img2,
    },
  ];

  return (
    <div className="home">
      <header className="header">
        <TopNavBar />
      </header>
      <main className="main">
        <div className="row1">
          <div className="">
            <h1 className="main__heading">Load Me Something, Mister!</h1>
            <p className="main__text">
              Reliable Dispatch Services for Truckers. Maximize Your
              Profitability & Minimize Downtime. Build Trust with Us.
            </p>
            <div className="parent-container">
              <EmailButton email={emailAddress} />
            </div>
          </div>
        </div>
        <div className="row2">
          <h1 className="main__heading">Meet Our Team</h1>
          <div className="team">
            {teamMembers.map((member) => (
              <div className="team-member">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member__image"
                />
                <h2 className="team-member__name">{member.name}</h2>
                <p className="team-member__title">{member.title}</p>
                <p className="team-member__bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="row3">
          <h1 className="main__heading">Services</h1>
          <div className="pricing-container">
            <PricingCard
              title="10%"
              price="1 Truck"
              description="Flat Rate Per Load."
            />
            <PricingCard
              title="7%"
              price="2-4 Trucks"
              description="Flat Rate Per Load."
            />
            <PricingCard
              title="5%"
              price="5+ Trucks"
              description="Flat Rate Per Load."
            />
          </div>
          <div className="parent-container">
            <EmailButton email={emailAddress} />
          </div>
        </div>
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

export default CompletePage;
