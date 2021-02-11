import * as actions from "./actionTypes";

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
