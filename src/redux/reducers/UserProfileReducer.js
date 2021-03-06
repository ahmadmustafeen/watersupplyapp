import {
    FETCH_USER_PROFILE_SUCCESS,
    SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS,
    SWITCH_LANG_SUCCESS,
} from '../actionTypes';
import { PUSH_NOTIFICATION_FUNCTION_REDUCER, SWITCH_CURRENCY_SUCCESS } from '../actionTypes';

const initialState = {
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_LANG_SUCCESS: {
            return { ...action.payload };
        }
        case SWITCH_CURRENCY_SUCCESS: {
            return { ...state, ...action.payload };
        }
        case SIGN_IN_SUCCESS: {
            return { ...state, ...action.payload };
        }
        case FETCH_USER_PROFILE_SUCCESS: {
            return { ...state, ...action.payload };
        }
        case SIGN_OUT_SUCCESS: {
            return { ...action.payload };
        }
        case PUSH_NOTIFICATION_FUNCTION_REDUCER: {
            return { ...state, notification: state.notification === 1 ? 0 : 1 };
        }
        default:
            return state;
    }
};
