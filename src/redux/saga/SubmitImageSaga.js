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
    // const { id } = payload;
    console.log(payload, "payload")
    // console.log(data, "data")
    // const id = 2
    try {
        yield put(startAction(SUBMIT_IMAGES))
        const data = { task_id: payload.id, images: payload.selectedImage, }

        //     let userProfile = yield getItem('@userProfile')
        //     userProfile = JSON.parse(userProfile)
        //     const data = { num: id, user_id: userProfile.user_id }
        //     console.log(data, "data")


        //     // console.log(JSON.parse(userProfile), "@userProfile")
        //     yield put(startAction(FETCH_PERFORMED_TOPIC));
        let userProfile = yield getItem('@userProfile');
        userProfile = JSON.parse(userProfile);
        RestClient.setHeader('Authorization', `Bearer ${userProfile.token}`,);
        console.log("payload.selectedImage,", payload.selectedImage[0].uri)
        const form_data = new FormData();
        // form_data.append(`images[]`, [payload.selectedImage])
        for (let key in payload.selectedImage) {
            console.log(payload.selectedImage[key])
            form_data.append(`images[${key}]`,
                {
                    name: payload.selectedImage[key].modificationDate + key,
                    uri: payload.selectedImage[key].path,
                    // uri: false ? 'file:///data/user/0/com.foodpandaapp/cache/react-native-image-crop-picker/IMG_20210614_112447001.jpg' : payload.selectedImage[key].uri,
                    type: payload.selectedImage[key].mime
                });
        }
        // form_data.append('images[]', payload.selectedImage);
        form_data.append('task_id', payload.id);
        // console.log("SD", form_data.getAll('images[]'))
        console.log(JSON.parse(JSON.stringify(form_data)), "form_data")
        // form_data.append('author_name', payload.author_name);
        const response = yield call(() =>

            RestClient.post(API_ENDPOINTS.image, form_data),
        );
        // console.log(response, "response")
        //     // if (response.problem === NETWORK_ERROR) {
        //     //     return yield put({ type: SHOW_NETWORK_MODAL });
        //     // }
        // const {
        //     data: { data: res, message, success },
        // } = response;
        console.log('user', response);
        if (!!response.data.status) {
            yield put({ type: SUBMIT_IMAGES_SUCCESS, payload: null });
            Alert.alert('Images uploaded Successfully', 'Press continue to add photos', [
                // {
                //     text: 'Cancel',
                //     onPress: () => true,
                //     style: 'cancel',
                // },
                {
                    text: 'Continue',
                    onPress: () => {
                        // setState({ ...state, selectedImage: state.selectedImage.filter(image => image.uri != id) })
                        NavigationService.navigate(FORM_SCREEN);
                    },
                },
            ]);


            // Alert.alert("Submit")
            // NavigationService.navigate(HOME_SCREEN)
        } else {
            const text =
                "Something went Wrong uploading the photos";
            Alert.alert(text);

            yield put({ type: SUBMIT_IMAGES_FAILURE, payload: null });
        }
    } catch (error) {
        yield put({ type: SUBMIT_IMAGES_FAILURE, error });
        // yield put({ type: SIGN_IN_FAILURE, error });
    } finally {
        yield put(stopAction(SUBMIT_IMAGES));
    }
}
