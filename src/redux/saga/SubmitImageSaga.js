import { FORM_SCREEN, HOME, HOME_SCREEN } from '../../constants/Screens';
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
    FETCH_TOPIC_SUCCESS,
    SHOW_NETWORK_MODAL,
    SIGN_IN,
    SIGN_IN_FAILURE,
    SUBMIT_IMAGES,
    SUBMIT_IMAGES_FAILURE,
    SUBMIT_IMAGES_SUCCESS,
} from '../actionTypes';
import { getItem, setItem } from '../../helpers/LocalStorage';
import { startAction, stopAction } from '../actions';
import { NETWORK_ERROR } from 'apisauce';

export function* submitImageSaga({ payload }) {
    console.log(payload, "payload")

    try {
        yield put(startAction(SUBMIT_IMAGES))



        let userProfile = yield getItem('@userProfile');
        userProfile = JSON.parse(userProfile);





        RestClient.setHeader('Authorization', `Bearer ${userProfile.token}`,);


        const form_data = new FormData();
        for (let key in payload.selectedImage) {
            console.log(payload.selectedImage[key])
            form_data.append(`images[${key}]`,
                {
                    name: payload.selectedImage[key].modificationDate + key,
                    uri: payload.selectedImage[key].path,
                    type: payload.selectedImage[key].mime
                });
        }
        form_data.append('task_id', payload.id);
        const response = yield call(() =>
            RestClient.post(API_ENDPOINTS.image, form_data),
        );
        if (!!payload.noModel) {
            console.log(response, "image upload response")
            if (!!response.data.status) {
                yield setItem('@uploadImage', JSON.stringify(null));
            }

        }






        else if (response.problem === "NETWORK_ERROR") {
            yield setItem('@uploadImage', JSON.stringify(payload));
            Alert.alert("Network Error", "Images are stored locally and will be uploaded when connected to a network", [
                {
                    text: 'Cancel',
                    onPress: () => true,
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        NavigationService.navigate(FORM_SCREEN);
                    },
                },
            ]);
        }
        else if (!!response.data.status) {
            yield put({ type: SUBMIT_IMAGES_SUCCESS, payload: null });
            Alert.alert('Images uploaded Successfully', 'Press continue to add photos', [
                {
                    text: 'Continue',
                    onPress: () => {
                        NavigationService.navigate(FORM_SCREEN);
                    },
                },
            ]);
        } else {
            const text =
                "Something went Wrong uploading the photos";
            Alert.alert(text);

            yield put({ type: SUBMIT_IMAGES_FAILURE, payload: null });
        }
    } catch (error) {
        yield put({ type: SUBMIT_IMAGES_FAILURE, error });
    } finally {
        yield put(stopAction(SUBMIT_IMAGES));
    }
}
