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
} from '../actionTypes';
import { getItem, setItem } from '../../helpers/LocalStorage';
import { startAction, stopAction } from '../actions';
import { NETWORK_ERROR } from 'apisauce';

export function* signinSaga({ payload }) {
    try {
        yield put(startAction(SIGN_IN));
        // Alert.alert("SIGN IN")
        // yield setItem('@userProfile', JSON.stringify({ username: "Ahmad", token: "34234234" }));
        // NavigationService.navigate(HOME, { Screen: HOME })
        // let profile = yield getItem('@userProfile');

        // profile = JSON.parse(profile)
        // yield put(startAction(SIGN_IN));
        // const { email, password } = payload;

        // const signInData = {
        //     email,
        //     password,
        // };
        // console.log(signInData, "signInData")
        const response = yield call(() =>
            RestClient.post(API_ENDPOINTS.signin, payload),
        );
        // console.log(response, "response")
        if (response.problem === NETWORK_ERROR) {
            return yield put({ type: SHOW_NETWORK_MODAL });
        }
        const {
            data: { data: res, message, success },
        } = response;
        // console.log('user', response);
        if (response.status == 200) {
            yield put({ type: FETCH_TOPIC_SUCCESS, payload: response.data.data.task });
            yield setItem('@userProfile', JSON.stringify(res));
            RestClient.setHeader('Authorization', `Bearer ${res.token}`);

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
