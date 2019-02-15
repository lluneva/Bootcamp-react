import CryptoJS from "crypto-js";
import BootcampAPI from "../../helpers/BootcampAPI";
import {
  API,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  POST_SUBMITTED_ERROR,
  POST_SUBMITTED_SUCCESS
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

const getUsersSuccess = res => {
  return {
    type: GET_USERS_SUCCESS,
    payload: res.data.payload
  };
};

const getUsersError = () => {
  return {
    type: GET_USERS_ERROR
  };
};

const getPostsSucess = res => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: res.data.payload
  };
};

const getPostsError = () => {
  return {
    type: GET_POSTS_ERROR
  };
};

const postSubmittedSuccess = res => {
  return {
    type: POST_SUBMITTED_SUCCESS,
    payload: res.data.payload
  };
};

const postSubmittedError = () => {
  return {
    type: POST_SUBMITTED_ERROR
  };
};

/*------action creators (functions that create actions)------*/

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
      email: email,
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

const getUsers = () => {
  return dispatch => {
    return BootcampAPI.get(API.GET_USERS)
      .then(res => dispatch(getUsersSuccess(res)))
      .catch(err => {
        console.log(err);
        dispatch(getUsersError());
      });
  };
};

const getPosts = () => {
  return dispatch => {
    return BootcampAPI.get(API.GET_POSTS)
      .then(res => dispatch(getPostsSucess(res)))
      .catch(err => {
        console.log(err);
        dispatch(getPostsError());
      });
  };
};
const submitPost = (formData, caption) => {
  return dispatch => {
    return BootcampAPI.post(API.POST_IMAGE, formData)
      .then(res => {
        console.log(res);
        return BootcampAPI.post(API.POST_CAPTION, {
          // sanemam contentId no formData un liekam ieksa nakamaj
          caption,
          contentId: res.data.payload.contentId
        }).then(res => dispatch(postSubmittedSuccess(res)));
      })
      .catch(err => {
        console.error(err);
        dispatch(postSubmittedError());
      });
  };
};

 const validateToken = () => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    // if there is a token
    return true;
  }
  return false;
};



export { register, login, getUsers, getPosts, submitPost , validateToken}; // var sadi ekportet vai vards export pirms const register
