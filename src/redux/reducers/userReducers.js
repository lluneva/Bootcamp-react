import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../../constants";

const defaultState = {
  isRegistered: false,
  isLoggedIn: false
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
