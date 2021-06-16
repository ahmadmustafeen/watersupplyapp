import { HOME } from '../../constants/Screens';
// import { setItem } from 'helpers/Localstorage';
import { Alert } from 'react-native';
import { put, call, all, select } from 'redux-saga/effects';
import { API_ENDPOINTS } from '../../constants/Network';
import { RestClient } from '../../network/RestClient';

// import {
//     SIGN_IN_FAILURE,
//     SIGN_IN_SUCCESS,
//     HIDE_MODAL,
// } from '../actionTypes';
import * as NavigationService from '../../../NavigationService';
import {
    FETCH_PERFORMED_TOPIC,
    FETCH_PERFORMED_TOPIC_FAILURE,
    FETCH_PERFORMED_TOPIC_SUCCESS,
    FETCH_TASK,
    FETCH_TASK_FAILURE,
    FETCH_TASK_SUCCESS,
    FETCH_TOPIC_SUCCESS,
    SHOW_NETWORK_MODAL,
    SIGN_IN,
    SIGN_IN_FAILURE,
} from '../actionTypes';
import { getItem, setItem } from '../../helpers/LocalStorage';
import { startAction, stopAction } from '../actions';
import { NETWORK_ERROR } from 'apisauce';

export function* fetchTaskSaga({ payload }) {
    // const { id } = payload;
    // const id = 2
    try {
        // yield put({ type: FETCH_TASK_SUCCESS, payload: [] });
        let userProfile = yield getItem('@userProfile')
        userProfile = JSON.parse(userProfile)
        RestClient.setHeader('Authorization', `Bearer ${userProfile.token}`,);

        const data = { user_id: userProfile.user_id }
        console.log(data, "data")


        // console.log(JSON.parse(userProfile), "@userProfile")
        yield put(startAction(FETCH_TASK));

        const response = yield call(() =>
            RestClient.get(API_ENDPOINTS.all_task + "/" + userProfile.user_id),
        );
        console.log(response, "response")
        // if (response.problem === NETWORK_ERROR) {
        //     return yield put({ type: SHOW_NETWORK_MODAL });
        // }
        const {
            data: { data: res, message, success },
        } = response;
        // console.log('user', response);
        if (response.status == 200) {
            yield put({ type: FETCH_TASK_SUCCESS, payload: response.data.data });
        } else {
            const text =
                "Something went Wrong Fetching the data";
            Alert.alert(text);

            yield put({ type: FETCH_TASK_FAILURE, payload: null });
        }
    } catch (error) {
        // yield put({ type: SIGN_IN_FAILURE, error });
    } finally {
        yield put(stopAction(FETCH_TASK));
    }
}
