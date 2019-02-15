import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  POST_SUBMITTED_ERROR,
  POST_SUBMITTED_SUCCESS
} from "../../constants";

const defaultState = {
  isRegistered: false,
  isLoggedIn: false,
  users: null,
  posts: null
};

export const registerReducer = (state = defaultState, action) => {
  // it returns default state false as default case
  switch (action.type) {
    //parbaudam action and set new state accordingly
    case REGISTER_SUCCESS:
      return { ...state, isRegistered: true };
    //  seit kope state, lai to mainitu, nevis maina pa tieso, pievienojot jaunu property.
    //tapec izmanto ... funkciju (desctructure method)
    case REGISTER_ERROR:
      return { ...state, isRegistered: false };
    default:
      return state;
  }
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    case LOGIN_ERROR:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export const getUsersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case GET_USERS_ERROR:
      return { ...state, users: null };

    default:
      return state;
  }
};

export const getPostsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return { ...state, posts: action.payload.reverse() };
    case POST_SUBMITTED_SUCCESS:
      return { ...state, posts: [action.payload, ...state.posts] };
    case POST_SUBMITTED_ERROR:
    case GET_POSTS_ERROR:
    default:
      return state;
  }
};
