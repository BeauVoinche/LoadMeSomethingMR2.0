import React from "react";

const PhoneButton = ({ phoneNumber }) => {
  return (
    <a href={`tel:${phoneNumber}`} className="call-button">
      318-264-2314
    </a>
  );
};

export default PhoneButton;