import { call, put, take, takeEvery } from 'redux-saga/effects';
import { INIT_APP_REQUEST } from '../actionTypes';
function* initApp() {

}

const appSaga = [
    takeEvery(INIT_APP_REQUEST,initApp)
];

export default appSaga;