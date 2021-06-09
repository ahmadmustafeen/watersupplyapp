import { combineReducers } from 'redux';
import UserProfileReducer from './UserProfileReducer';
import topicReducer from './topicReducer';
import uiReducer from './UIReducer';


export default combineReducers({
  topicReducer,
  UserProfileReducer,
  uiReducer,
});
