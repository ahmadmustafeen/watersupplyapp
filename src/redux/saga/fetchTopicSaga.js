import {put, call} from 'redux-saga/effects';
import {
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
} from '../../redux/actionTypes';

import {API_ENDPOINTS} from '../../constants/Network';
import {RestClient} from '../../network/RestClient';
export function* fetchTopicSaga({type}) {
  try {
    const response = yield call(() => RestClient.get(API_ENDPOINTS.order));
    // const { status, data, message } = response;
    const {
      data: {data},
      status,
    } = response;
    console.log('FETCH_ORDER_SAGA', response);
    if (status !== 200) {
      yield put({type: FETCH_ORDER_FAILURE, payload: data});
    } else {
      yield put({type: FETCH_ORDER_SUCCESS, payload: data});
    }

    // yield put({ type: FETCH_BOOK_LISTS_SUCCESS, payload: null });
  } catch (error) {
    yield put({type: FETCH_ORDER_FAILURE, error});
  }
}
