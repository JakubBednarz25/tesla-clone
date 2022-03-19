import React from "react";

import "./Button.scss";

const Button = ({ text, background }) => {
  return (
    <button className={`${background === "dark" ? "dark-bg" : "light-bg"}`}>
      {text}
    </button>
  );
};

export default Button;
