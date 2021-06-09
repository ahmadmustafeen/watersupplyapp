import {FETCH_TOPIC_SUCCESS} from '../actionTypes';

const initialState = [
  {
    id: '1',
    title: 'title 1',
    description: 'desc 1',
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOPIC_SUCCESS: {
      return {...action.payload};
    }
    default:
      return state;
  }
};
