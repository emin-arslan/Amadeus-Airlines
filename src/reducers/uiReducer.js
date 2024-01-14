import { SET_AIRPORT_NAMES, SET_FLIGHTS_ROUTES } from "../actionTypes";

const INITAL_STATE = {
    airportNames: [],
    flightRoutes: []
}

export default function uiReducer(state = INITAL_STATE, action) {
    switch(action.type)
    {
        case SET_AIRPORT_NAMES:
            return {...state, airportNames: action.payload};
        case SET_FLIGHTS_ROUTES:
            return {...state, flightRoutes: action.payload};
        default:
            return state;
    }

}