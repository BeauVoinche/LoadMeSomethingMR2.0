import React from "react";

const PricingCard = ({ title, price, description }) => {
  return (
    <div className="pricing-card">
      <h2 className="pricing-card__title">{title}</h2>
      <hr />
      <h3 className="pricing-card__price">{price}</h3>
      <hr />
      <p className="pricing-card__description">{description}</p>
    </div>
  );
};

export default PricingCard;
