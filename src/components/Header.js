import React from "react";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

const Header = ({ title = "Home" }) => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <header className='header'>
      {user ? <Avatar /> : null}
      <h3>{user ? title : "noTwitter"}</h3>
    </header>
  );
};

export default Header;
