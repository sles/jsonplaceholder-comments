import { all, spawn } from 'redux-saga/effects';
import commentsSaga from '../features/comments/redux/saga';

function* sagas() {
  yield all([spawn(commentsSaga)]);
}

export default sagas;
