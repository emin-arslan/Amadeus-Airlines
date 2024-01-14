import {GET_AIRPORT_NAMES, GET_FLIGHTS_ROUTES} from "../actionTypes";

export const getAirportNames = () => { 
    return {
    type: GET_AIRPORT_NAMES,
}};

export const getFlightRoutes = () => { 
    return {
    type: GET_FLIGHTS_ROUTES,
}};