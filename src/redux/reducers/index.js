import { combineReducers } from 'redux';
import UserProfileReducer from './UserProfileReducer';
import topicReducer from './topicReducer';
import uiReducer from './UIReducer';
import LoadingReducer from './LoadingReducer'


export default combineReducers({

  LoadingReducer,
  topicReducer,
  UserProfileReducer,
  uiReducer,
});
