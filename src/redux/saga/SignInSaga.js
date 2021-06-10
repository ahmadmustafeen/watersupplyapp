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
    FETCH_TOPIC_SUCCESS,
    SHOW_NETWORK_MODAL,
    SIGN_IN,
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS,
} from '../actionTypes';
import { getItem, setItem } from '../../helpers/LocalStorage';
import { startAction, stopAction } from '../actions';
import { NETWORK_ERROR } from 'apisauce';

export function* signinSaga({ payload }) {
    try {
        yield put(startAction(SIGN_IN));

        const response = yield call(() =>
            RestClient.post(API_ENDPOINTS.signin, payload),
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
            // console.log("RES", res,)
            yield setItem('@userProfile', JSON.stringify({ token: res.token, user_id: res.username }));
            // const userProfile = yield getItem('@userProfile')
            // console.log(JSON.parse(userProfile), "@userProfile")
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
