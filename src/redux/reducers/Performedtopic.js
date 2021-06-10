import { FETCH_PERFORMED_TOPIC_SUCCESS } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PERFORMED_TOPIC_SUCCESS: {
            return [...action.payload];
        }
        default:
            return state;
    }
};
