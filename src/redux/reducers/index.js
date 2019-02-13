import {combineReducers} from "redux";
import {registerReducer} from "./userReducers";

const rootReducer =combineReducers({
    registerReducer,
    // loginReducer,
});
export default rootReducer;
