import { all } from 'redux-saga/effects'

import app from './appSaga';
import ui from './uiSaga';

export default function* rootSaga() {
    yield all([
        ...app,
        ...ui
    ])
}