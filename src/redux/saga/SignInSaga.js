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
    APPROVE_TASK,
    FETCH_TASK,
    FETCH_TOPIC_SUCCESS,
    SHOW_NETWORK_MODAL,
    SIGN_IN,
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS,
    SUBMIT_IMAGES,
} from '../actionTypes';
import { getItem, setItem } from '../../helpers/LocalStorage';
import { startAction, stopAction } from '../actions';
import { NETWORK_ERROR } from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';

export function* signinSaga({ payload }) {
    try {
        yield put(startAction(SIGN_IN));
        const userProfile = yield getItem('@userProfile')
        let temp_id = JSON.parse(userProfile)?.user_id
        const response = yield call(() =>
            RestClient.post(API_ENDPOINTS.signin, { user_id: payload.user_id ? payload.user_id : temp_id }),
        );
        console.log(response, "response")
        if (response.problem === NETWORK_ERROR) {
            return yield put({ type: SHOW_NETWORK_MODAL });
        }
        const {
            data: { data: res, message, status },
        } = response;
        // console.log('user', response);
        if (status) {
            yield put({ type: FETCH_TOPIC_SUCCESS, payload: response.data.data.task });
            yield put({ type: FETCH_TASK, payload: null });
            // console.log("RES", res,)
            yield setItem('@userProfile', JSON.stringify({ token: res.token, user_id: res.username }));

            let approveTaskData = yield getItem('@approveItem');
            approveTaskData = JSON.parse(approveTaskData)
            if (!!approveTaskData) {
                yield put({ type: APPROVE_TASK, payload: { ...approveTaskData, noModel: true } })
            }
            let submitImageData = yield getItem('@uploadImage');
            submitImageData = JSON.parse(submitImageData)
            if (!!submitImageData) {
                yield put({ type: SUBMIT_IMAGES, payload: { ...submitImageData, noModel: true } })
            }






            RestClient.setHeader('Authorization', `Bearer ${res.token}`);
            yield put({ type: SIGN_IN_SUCCESS, payload: res });


            NavigationService.navigate(HOME);
        } else {
            const text =
                "Following username is incorrect or does'nt exist! Try again";
            Alert.alert(text);

            yield put({ type: SIGN_IN_FAILURE, payload: null });
        }
    } catch (error) {
        yield put({ type: SIGN_IN_FAILURE, error });
    } finally {
        yield put(stopAction(SIGN_IN));
    }
}
