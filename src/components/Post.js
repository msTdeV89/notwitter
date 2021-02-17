import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { db } from "../firebase/firebase";
import * as actions from "../redux/actions/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../firebase/firebase";

const Post = ({ post }) => {
  const userPosts = useSelector((state) => state.user.currentUser);
  const [author, setAuthor] = useState(null);
  const dispatch = useDispatch();
  const { currentUser, date, content, id, image } = post;
  const u = JSON.parse(localStorage.getItem("notwitterCurrentUser"));
  useEffect(() => {
    if (u) {
      setAuthor(u.posts.includes(id));
    }
  }, [id, u, userPosts]);
  console.log(author);
  return (
    <article className='post'>
      <aside className='post__avatar'>
        <Avatar />
      </aside>
      <div className='post__body'>
        <header className='post__header'>
          <h4 className='post__author'>{currentUser}</h4>
          <p className='post__date'>{new Date(date).toLocaleDateString()}</p>
          {author ? (
            <IconButton
              onClick={async () => {
                await db
                  .collection("posts")
                  .doc(id)
                  .delete()
                  .then(async () => {
                    await db
                      .collection("users")
                      .doc(u.uid)
                      .update({
                        posts: firebase.firestore.FieldValue.arrayRemove(id),
                      });
                    dispatch({ type: actions.REMOVE_POST, payload: id });
                  });
              }}
            >
              <HighlightOffIcon />
            </IconButton>
          ) : (
            ""
          )}
        </header>
        <p>{content}</p>
        <img src={image} alt={image} />
      </div>
    </article>
  );
};

export default Post;
