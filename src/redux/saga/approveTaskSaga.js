import { put, call } from 'redux-saga/effects';
import {
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
  APPROVE_TASK_FAILURE,
  APPROVE_TASK_SUCCESS,
  APPROVE_TASK,
  FETCH_TASK,
} from '../actionTypes';
import * as NavigationService from '../../../NavigationService';

import { API_ENDPOINTS } from '../../constants/Network';
import { RestClient } from '../../network/RestClient';
import { Alert } from 'react-native';
import { IMAGE_PICKER_SCREEN } from '../../constants/Screens';
import { startAction, stopAction } from '../actions';
import { getItem, setItem } from '../../helpers/LocalStorage';
export function* approveTaskSaga({ type, payload }) {
  try {
    yield put(startAction(APPROVE_TASK));
    console.log('APPROVED TASK SAGA', payload);

    let userProfile = yield getItem('@userProfile');
    userProfile = JSON.parse(userProfile);
    RestClient.setHeader('Authorization', `Bearer ${userProfile.token}`,);
    const response = yield call(() =>
      RestClient.post(API_ENDPOINTS.approval, payload),
    );

    console.log(response);
    const { status, data, message } = response;
    // const {
    //   data: {data},
    //   status,
    // } = response;
    console.log('FETCH_ORDER_SAGA', response);
    if (payload.noModel === true) {
      if (response.data.status) {
        yield setItem('@approveItem', JSON.stringify(null));
      }
    }

    else if (response.problem === "NETWORK_ERROR") {
      yield setItem('@approveItem', JSON.stringify(payload));
      // Alert.alert("Network Error", "Your action is stored locally and will be perform when connected to a network")
      Alert.alert("Network Error", "Your action is stored locally and will be perform when connected to a network", [
        {
          text: 'Cancel',
          onPress: () => true,
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // setState({ ...state, selectedImage: state.selectedImage.filter(image => image.uri != id) })
            NavigationService.navigate(IMAGE_PICKER_SCREEN);
          },
        },
      ]);
    }

    else if (!response.data.status) {
      yield put({ type: APPROVE_TASK_FAILURE, payload: data });
    } else {
      yield put({ type: APPROVE_TASK_SUCCESS, payload: data });
      yield put({ type: FETCH_TASK, payload: null });




      Alert.alert('Task is Approved', 'Press continue to add photos', [
        {
          text: 'Cancel',
          onPress: () => true,
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // setState({ ...state, selectedImage: state.selectedImage.filter(image => image.uri != id) })
            NavigationService.navigate(IMAGE_PICKER_SCREEN);
          },
        },
      ]);
    }

    // yield put({ type: FETCH_BOOK_LISTS_SUCCESS, payload: null });
  } catch (error) {
    // yield put({type: FETCH_ORDER_FAILURE, error});
  } finally {
    yield put(stopAction(APPROVE_TASK));
  }
}
