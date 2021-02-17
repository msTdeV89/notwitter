import * as actions from "../actions/actionTypes";

const initialState = {
  user: null,
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGN_UP:
      return { ...state, user: action.payload };
    case actions.LOGIN:
      return { ...state, user: action.payload };
    case actions.SIGN_OUT:
      return { ...state, user: null, currentUser: null };
    case actions.GET_USER_DATA:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
