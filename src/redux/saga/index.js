import { takeLatest, all, take } from 'redux-saga/effects';
import {
    SIGN_IN
} from '../actionTypes';

import { signinSaga } from './SignInSaga';

function* actionWatcher() {
    yield takeLatest(SIGN_IN, signinSaga);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
