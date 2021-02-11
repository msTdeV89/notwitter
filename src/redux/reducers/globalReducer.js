import * as actions from "../actions/actionTypes";

const initialState = {
  currentPage: "home",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default globalReducer;
