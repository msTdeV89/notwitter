import React from "react";
import NewPost from "../components/NewPost";
import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <div className='home'>
      <NewPost />
      <PostsList />
    </div>
  );
};

export default Home;
