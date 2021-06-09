import {combineReducers} from 'redux';
import UserProfileReducer from './UserProfileReducer';
import topicReducer from './topicReducer';

export default combineReducers({
  topicReducer,
  UserProfileReducer,
});
