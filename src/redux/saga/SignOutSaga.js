import { FORM_SCREEN, HOME, SIGNIN_SCREEN } from '../../constants/Screens';
import { Alert } from 'react-native';
import { put } from 'redux-saga/effects';

import { RestClient } from '../../network/RestClient';
import { SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE } from '../../redux/actionTypes';
import * as NavigationService from '../../../NavigationService';
import {
  FETCH_ADDRESS_SUCCESS,
  FETCH_ORDER_SUCCESS,
  FETCH_USER_CART_SUCCESS,
  FETCH_USER_FAVOURITE_SUCCESS,
} from '../actionTypes';
import { setItem } from '../../helpers/LocalStorage';
export function* signoutSaga() {
  try {
    // NavigationService.navigate(Aut);
    yield setItem('@userProfile', JSON.stringify({}));
    // userProfile = JSON.parse(userProfile);
    // let signedOutUserProfile = {
    //   language: userProfile.language,
    //   currency: userProfile.currency,
    //   notification: true,
    // };
    // console.log(signedOutUserProfile, 'userProfile');

    // yield setItem('@userProfile', JSON.stringify(signedOutUserProfile));
    // RestClient.setHeader('Authorization', null);
    // yield put({type: SIGN_OUT_SUCCESS, payload: });
    // yield put({type: FETCH_ORDER_SUCCESS, payload: []});
    // yield put({
    //   type: FETCH_USER_FAVOURITE_SUCCESS,
    //   payload: null,
    // });
    // yield put({type: FETCH_USER_CART_SUCCESS, payload: null});
    // yield put({type: FETCH_ADDRESS_SUCCESS, payload: {data: []}});
    NavigationService.navigate('Auth', {
      screen: SIGNIN_SCREEN,
      params: { cleanBack: true },
    });
  } catch (error) {
    yield put({ type: SIGN_OUT_FAILURE, error });
    console.log(error);
  }
}
