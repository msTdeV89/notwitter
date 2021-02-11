import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer,
});

export default rootReducer;
