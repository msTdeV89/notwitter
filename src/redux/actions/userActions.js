import * as actions from "./actionTypes";
import { db } from "../../firebase/firebase";

export const userSignUp = (user) => ({
  type: actions.SIGN_UP,
  payload: user,
});
export const userLogIn = (user) => ({
  type: actions.LOGIN,
  payload: user,
});
export const userSignOut = () => ({
  type: actions.LOGIN,
});
export const userSetProfile = (user) => ({
  type: actions.LOGIN,
  payload: user,
});
export const getUserData = () => async (dispatch, getState) => {
  const { user } = getState();
  const userRef = db.collection("users").doc(user.user);
  await userRef
    .get()
    .then((doc) => {
      if (doc.data()) {
        dispatch({ type: actions.GET_USER_DATA, payload: doc.data() });
        localStorage.setItem(
          "notwitterCurrentUser",
          JSON.stringify(doc.data())
        );
      } else {
        console.log("No such document.");
      }
    })
    .catch((err) => {
      console.log(err.code);
      console.log(err.message);
    });
};
