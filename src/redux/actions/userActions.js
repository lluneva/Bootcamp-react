import CryptoJS from "crypto-js";
import BootcampAPI from "../../helpers/BootcampAPI";
import { API } from "../../constants";
import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from "../../constants";

/*------actions------*/
const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
    isRegistered: true // this is payload, and in this case is sort of optional
  };
};

const registerError = () => {
  return {
    type: REGISTER_ERROR,
    isRegistered: false // this is payload, and in this case is sort of optional
  };
};

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
    isLoggedIn: true // this is payload, and in this case is sort of optional
  };
};

const loginError = () => {
  return {
    type: LOGIN_ERROR,
    isLoggedIn: false // this is payload, and in this case is sort of optional
  };
};

/*------action creators------*/
//functions that create actions

const register = (username, email, password) => {
  return dispatch => {
    return BootcampAPI.post(API.REGISTER, {
      // these are the variables that API is expecting from user
      email, // var  sadi vai ka username
      username: username,
      hashedPassword: CryptoJS.SHA256(password).toString()
    })
      .then(res => dispatch(registerSuccess()))
      .catch(err => dispatch(registerError()));
  };
};
const login = (email, password) => {
  return dispatch => {
    return BootcampAPI.post(API.LOGIN, {
      // API endpoints 
      // these are the variables that API is expecting from user
      email:email,
      hashedPassword: CryptoJS.SHA256(password).toString() //?
    })
      .then(res => {
        const token = res.data.payload.token;
        localStorage.setItem("jwtToken", token);
        dispatch(loginSuccess());
      })
      .catch(() => dispatch(loginError()));
  };
};

export { register, login }; // var sadi ekportet vai vards export pirms const register
