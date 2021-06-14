import {GET_TASK_ID} from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_ID: {
      return [...action.payload];
    }
    default:
      return state;
  }
};
