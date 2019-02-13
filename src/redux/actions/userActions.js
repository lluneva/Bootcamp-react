import CryptoJS from "crypto-js";
import BootcampAPI from "../../helpers/BootcampAPI";
import { API } from "../../constants";
import { REGISTER_ERROR, REGISTER_SUCCESS} from "../../constants"


/*------actions------*/
const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
    isRegistered:true,
  }
}

const registerError = () => {
  return {
    type: REGISTER_ERROR,
    isRegistered:false, // this is payload
  }
}

/*------action creators------*/
//functions that create actions

const register = (username, email, password) => {
  return dispatch => {
    return BootcampAPI.post(API.REGISTER, {
      email, // var  sadi vai ka username
      username: username,
      hashedPassword: CryptoJS.SHA256(password).toString()
    })
      .then(res => dispatch(registerSuccess()))
      .catch(err => dispatch(registerError()));
  };
};

export { register }; // var sadi ekportet vai vards export pirms const register
