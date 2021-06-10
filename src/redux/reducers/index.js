import { combineReducers } from 'redux';
import UserProfileReducer from './UserProfileReducer';
import topicReducer from './topicReducer';
import uiReducer from './UIReducer';
import LoadingReducer from './LoadingReducer'
import Performedtopic from './Performedtopic'


export default combineReducers({
  LoadingReducer,
  topicReducer,
  UserProfileReducer,
  uiReducer,
  Performedtopic,
});
