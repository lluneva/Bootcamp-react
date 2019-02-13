import { REGISTER_ERROR, REGISTER_SUCCESS} from "../../constants"

const defaultState = {
    isRegistered:false
}

export const registerReducer = (state = defaultState, action) => {
    // it returns default state false as default case
  switch (action.type) {
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
