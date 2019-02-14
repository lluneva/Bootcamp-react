import { combineReducers } from "redux";
import { registerReducer, loginReducer, getUsersReducer, getPostsReducer } from "./userReducers";

const rootReducer = combineReducers({
  registerReducer: registerReducer,
  loginReducer: loginReducer,
  getUsersReducer: getUsersReducer,
  getPostsReducer: getPostsReducer
});

export default rootReducer;
