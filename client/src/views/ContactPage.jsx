import React, { useState, useEffect } from "react";
import { Link, UseNavigate } from "react-router-dom";
import axios from "axios";
import TopNavBar from "../components/TopNavBar";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://your-backend-url/contact", { name, phone, email })
      .then((response) => {
        console.log(response);
        setSubmitted(true);
        axios.post("http://your-backend-url/send-email", { email });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="home">
      <header className="header">
        <TopNavBar />
      </header>
      <main className="main">
        <h1 className="main__heading">Contact Us</h1>
        {submitted ? (
          <div className="main__message">
            <p>Thank you for contacting us!</p>
            <p>Someone will reach out to you soon.</p>
          </div>
        ) : (
          <form className="main__form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button className="main__button" type="submit">
              Submit
            </button>
          </form>
        )}
      </main>
      <footer className="footer">
        <p className="footer__text">
          © 2023 LoadMeSomething. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;
