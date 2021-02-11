import React from "react";
import { useSelector } from "react-redux";

const News = () => {
  const user = useSelector((state) => state.user.currentUser);

  return user ? <aside className='news'></aside> : null;
};

export default News;
