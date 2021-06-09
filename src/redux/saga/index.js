import { takeLatest, all, take } from 'redux-saga/effects';
import { FETCH_TOPIC, SIGN_IN, SIGN_OUT } from '../actionTypes';

import { signinSaga } from './SignInSaga';
import { fetchTopicSaga } from './fetchTopicSaga';
import { signoutSaga } from './SignOutSaga';

function* actionWatcher() {
  yield takeLatest(SIGN_IN, signinSaga);
  yield takeLatest(FETCH_TOPIC, fetchTopicSaga);
  yield takeLatest(SIGN_OUT, signoutSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
