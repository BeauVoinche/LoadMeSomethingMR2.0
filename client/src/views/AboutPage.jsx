import React, { useState, useEffect } from "react";
import { Link, UseNavigate } from "react-router-dom";
import axios from "axios";
import TopNavBar from "../components/TopNavBar";
import img from "../assets/Robert3.jpg";
import img2 from "../assets/Jack2.jpg";

const TeamMember = ({ name, title, bio, image }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} className="team-member__image" />
      <h2 className="team-member__name">{name}</h2>
      <p className="team-member__title">{title}</p>
      <p className="team-member__bio">{bio}</p>
    </div>
  );
};

const AboutPage = () => {
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
      <p></p>
      <main className="main">
        <h1 className="main__heading">Meet Our Team</h1>
        <div className="team">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              title={member.title}
              bio={member.bio}
              image={member.image}
            />
          ))}
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

export default AboutPage;
