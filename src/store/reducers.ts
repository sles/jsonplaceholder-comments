import { combineReducers } from 'redux';

import comments from '../features/comments/redux/reducer';

export default combineReducers({
  comments,
});
