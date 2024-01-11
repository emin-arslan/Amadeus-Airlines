import { SET_MOBILE_STATUS } from "../actionTypes";

const INITIAL_STATE = {
  isMobile: window.innerWidth <= 900,
};

export default function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_MOBILE_STATUS:
      return {
        ...state,
        isMobile: action.payload,
      };
    default:
      return state;
  }
}
