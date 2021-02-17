import * as actions from "../actions/actionTypes";

const initialState = {
  currentPage: "Home",
  newPostIsOpen: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case actions.NEW_POST_MOBILE_OPEN:
      return { ...state, newPostIsOpen: true };
    case actions.NEW_POST_MOBILE_CLOSE:
      return { ...state, newPostIsOpen: false };
    default:
      return state;
  }
};

export default globalReducer;
