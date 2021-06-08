import { HOME } from '../../constants/Screens';
// import { setItem } from 'helpers/Localstorage';
import { Alert } from 'react-native';
import { put, call, all, select } from 'redux-saga/effects';
import { API_ENDPOINTS } from '../../constants/Network'
import { RestClient } from '../../network/RestClient'
import { useTranslation } from 'react-i18next';
import { I18nManager } from 'react-native'
import {
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS,
    HIDE_MODAL,
} from '../actionTypes';
import * as NavigationService from '../../../NavigationService';
import { startAction, stopAction } from '../actions';
import { Platform } from 'react-native';

export function* signinSaga({ payload }) {

    try {
        yield put(startAction(SIGN_IN));
        const { email, password } = payload;

        const signInData = {
            email,
            password,
        };
        console.log(signInData, "signInData")
        const response = yield call(() =>
            RestClient.post(API_ENDPOINTS.signin, signInData),
        );
        if (response.problem === NETWORK_ERROR) {
            return yield put({ type: SHOW_NETWORK_MODAL });
        }
        const {
            data: { data: res, message, success },
        } = response;
        console.log('user', response);
        if (success) {
            yield setItem('@userProfile', JSON.stringify(res));
            RestClient.setHeader('Authorization', `Bearer ${res.token}`);


            if (!NavigationService.navigate(HOME)) NavigationService.navigate("Drawer", { Screen: HOME })

        } else {

            const text = 'Invalid credentials'
            Alert.alert(text)

            yield put({ type: SIGN_IN_FAILURE, payload: null });
        }
    } catch (error) {
        yield put({ type: SIGN_IN_FAILURE, error });
    } finally {
        yield put(stopAction(SIGN_IN));
    }
}
