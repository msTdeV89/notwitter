import React from "react";
import Home from "./Home";
import Login from "./Login";
import { useSelector } from "react-redux";

const Main = () => {
  const user = useSelector((state) => state.user.user);
  return <section className='page main'>{user ? <Home /> : <Login />}</section>;
};

export default Main;
