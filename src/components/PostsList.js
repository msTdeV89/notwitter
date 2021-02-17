import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const PostsList = () => {
  const postsState = useSelector((state) => state.posts.posts);
  const posts =
    postsState || JSON.parse(localStorage.getItem("notwitterPosts"));
  return (
    <ul className='postsList'>
      {posts.length > 0 ? (
        posts
          .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
          })
          .map((post) => {
            return <Post key={post.id} post={post} />;
          })
      ) : (
        <p className='postsList__noPosts'>No posts.</p>
      )}
    </ul>
  );
};

export default PostsList;
