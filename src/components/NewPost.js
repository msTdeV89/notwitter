import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import Button from "../reusable/Button";
import { useSelector, useDispatch } from "react-redux";
import Input from "../reusable/Input";
import { db } from "../firebase/firebase";
import * as actions from "../redux/actions/actionTypes";
import firebase from "../firebase/firebase";

const NewPost = () => {
  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  const [postErr, setPostErr] = useState(false);
  const [imageErr, setImageErr] = useState(false);
  const dispatch = useDispatch();
  const newPostIsOpen = useSelector((state) => state.global.newPostIsOpen);
  const user = useSelector((state) => state.user.user);
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const randomId = () => Math.floor(Math.random() * 1000000000);
    const id = randomId().toString();
    const date = new Date().toString();
    const validImg = image
      ? /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g.test(
          image
        )
      : true;
    const validPost = post.length > 0;
    validImg === false ? setImageErr(true) : setImageErr(false);
    validPost ? setPostErr(false) : setPostErr(true);
    const newPost = {
      currentUser: currentUser.displayName,
      id,
      user,
      content: post,
      date,
      image,
    };
    await db
      .collection("users")
      .doc(user)
      .update({
        posts: firebase.firestore.FieldValue.arrayUnion(id),
      });
    if (validImg && validPost) {
      await db
        .collection("posts")
        .doc(id)
        .set(newPost)
        .then(() => {
          dispatch({
            type: actions.ADD_POST,
            payload: newPost,
          });
          setPost("");
          setImage("");
        })
        .catch((err) => {
          console.log(err.code);
          console.log(err.message);
        });
    }
  };
  return (
    <div className={`newPost ${newPostIsOpen ? "newPost--isOpen" : ""}`}>
      <Avatar />
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          cols='30'
          rows='7'
          value={post}
          onChange={(e) => {
            setPost(e.target.value);
          }}
          required={postErr ? false : true}
          maxLength='255'
        ></textarea>
        <Input
          type='text'
          name='Image url'
          ph='https://example.com/images/uploads/94302/'
          value={image}
          err={imageErr ? true : false}
          func={(e) => {
            setImage(e.target.value);
          }}
        />
        <Button type='submit' title='Post' />
      </form>
    </div>
  );
};

export default NewPost;
