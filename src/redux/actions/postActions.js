import * as actions from "../actions/actionTypes";
import { db } from "../../firebase/firebase";

export const addPost = (post) => ({
  type: actions.ADD_POST,
  payload: post,
});
export const removePost = (id) => ({
  type: actions.REMOVE_POST,
  payload: id,
});
export const getPosts = () => async (dispatch, getState) => {
  const postsRef = db.collection("posts");
  await postsRef
    .get()
    .then((querySnaphot) => {
      querySnaphot.forEach((doc) => {
        if (doc.data()) {
          dispatch({
            type: actions.GET_POSTS,
            payload: doc.data(),
          });
          return doc.data();
        } else {
          console.log("No such document.");
        }
      });
    })
    .then(() => {
      const { posts } = getState();
      localStorage.setItem("notwitterPosts", JSON.stringify(posts.posts));
    })
    .catch((err) => {
      console.log(err);
    });
};
