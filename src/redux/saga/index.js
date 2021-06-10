import { takeLatest, all, take } from 'redux-saga/effects';
import { FETCH_PERFORMED_TOPIC, FETCH_TOPIC, SIGN_IN, SIGN_OUT } from '../actionTypes';

import { signinSaga } from './SignInSaga';
import { fetchTopicSaga } from './fetchTopicSaga';
import { signoutSaga } from './SignOutSaga';
import { fetchPerformedTopicSaga } from './FetchPerformedTopicSaga';

function* actionWatcher() {
  yield takeLatest(SIGN_IN, signinSaga);
  yield takeLatest(FETCH_TOPIC, fetchTopicSaga);
  yield takeLatest(SIGN_OUT, signoutSaga);
  yield takeLatest(FETCH_PERFORMED_TOPIC, fetchPerformedTopicSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
