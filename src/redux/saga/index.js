import { takeLatest, all, take } from 'redux-saga/effects';
import {
  FETCH_PERFORMED_TOPIC,
  APPROVE_TASK,
  SIGN_IN,
  SIGN_OUT,
  SUBMIT_IMAGES,
  FETCH_TASK,
} from '../actionTypes';

import { signinSaga } from './SignInSaga';
import { approveTaskSaga } from './approveTaskSaga';
import { signoutSaga } from './SignOutSaga';
import { fetchPerformedTopicSaga } from './FetchPerformedTopicSaga';
import { submitImageSaga } from './SubmitImageSaga';
import { fetchTaskSaga } from './fetchTaskSaga';

function* actionWatcher() {
  yield takeLatest(SIGN_IN, signinSaga);
  yield takeLatest(SIGN_OUT, signoutSaga);
  yield takeLatest(FETCH_PERFORMED_TOPIC, fetchPerformedTopicSaga);
  yield takeLatest(SUBMIT_IMAGES, submitImageSaga);
  yield takeLatest(APPROVE_TASK, approveTaskSaga);
  yield takeLatest(FETCH_TASK, fetchTaskSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
