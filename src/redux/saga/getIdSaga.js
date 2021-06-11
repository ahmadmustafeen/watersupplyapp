import {call, put} from 'redux-saga/effects';

export function* getIdSaga(action) {
  try {
    const response = yield call(() => RestClient.get(API_ENDPOINTS.order));
    console.log('IAS ID GETTER RESPONSE', response);
  } catch (error) {
    console.log('get id error', error);
  }
}
