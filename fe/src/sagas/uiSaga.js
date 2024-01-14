import { takeEvery, put } from 'redux-saga/effects';

import api from '../api';
import { GET_AIRPORT_NAMES, GET_FLIGHTS_ROUTES, SET_AIRPORT_NAMES, SET_FLIGHTS_ROUTES } from '../actionTypes';

function* getAirportNames () {
  console.log('here')
  try {
    const airportNames = yield api.getAirportNames();
    console.log(airportNames)
    if (airportNames) {
      yield put({
        type: SET_AIRPORT_NAMES,
        payload: [...airportNames],
      });
    }
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
}

function* getFlightRoutes () {
  try {
    const flightRoutes = yield api.getFlightRoutes();
    if (flightRoutes) {
      yield put({
        type: SET_FLIGHTS_ROUTES,
        payload: [...flightRoutes],
      });
    }
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
}

const uiSaga = [
  takeEvery(GET_AIRPORT_NAMES, getAirportNames),
  takeEvery(GET_FLIGHTS_ROUTES, getFlightRoutes)
];

export default uiSaga;
