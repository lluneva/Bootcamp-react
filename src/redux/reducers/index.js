import { combineReducers } from "redux";
import { registerReducer, loginReducer } from "./userReducers";

const rootReducer = combineReducers({
  registerReducer: registerReducer,
  loginReducer: loginReducer,
});
export default rootReducer;
