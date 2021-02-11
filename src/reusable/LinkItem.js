import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = ({ icon, title, path, isActive, func }) => {
  return (
    <li
      className={`linkItem ${isActive ? "linkItem--isActive" : ""}`}
      onClick={func}
    >
      <Link to={path}>
        {icon} <p>{title}</p>
      </Link>
    </li>
  );
};

export default HeaderLink;
