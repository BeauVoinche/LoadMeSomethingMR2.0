import React from "react";
import TopNavBar from "../components/TopNavBar";
import PricingCard from "../components/PricingCard";
import EmailButton from "../components/EmailButton";

const ServicesPage = () => {
  const emailAddress = "loadmesomethingmr@gmail.com";

  return (
    <div className="home">
      <header className="header">
        <TopNavBar />
      </header>
      <main className="main">
        <h1 className="main__heading"></h1>
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
          {/* <PricingCard
            title="15%"
            price="$150"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tincidunt nisi."
          /> */}
        </div>
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

export default ServicesPage;
