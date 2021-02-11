import React from "react";
import Post from "./Post";

const PostsList = () => {
  return (
    <ul className='postsList'>
      <Post title='post' />
      <Post title='post' />
      <Post title='post' />
      <Post title='post' />
    </ul>
  );
};

export default PostsList;
