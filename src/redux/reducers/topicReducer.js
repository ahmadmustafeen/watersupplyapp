import { FETCH_TOPIC_SUCCESS, FETCH_TASK_SUCCESS } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOPIC_SUCCESS: {
      return [...action.payload];
    }
    case FETCH_TASK_SUCCESS: {
      return [...action.payload];
    }
    default:
      return state;
  }
};
