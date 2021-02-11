import React from "react";

const Button = ({ title, type, cls }) => {
  return (
    <button type={type} className={`btn ${cls ? cls : ""}`}>
      {title}
    </button>
  );
};

export default Button;
