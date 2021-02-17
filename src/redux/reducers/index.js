import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import userReducer from "./userReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer,
  posts: postReducer,
});

export default rootReducer;
