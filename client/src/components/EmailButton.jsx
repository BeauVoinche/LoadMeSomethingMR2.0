import React from "react";

const EmailButton = ({ email }) => {
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button className="main__button" onClick={handleClick}>
      Get to Driving
    </button>
  );
};

export default EmailButton;
