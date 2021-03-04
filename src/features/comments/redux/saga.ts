import { put, takeLatest, call, SagaReturnType } from 'redux-saga/effects';

import { commentsGet } from '../api';
import * as actions from './actions';
import * as types from './types';

function* getCommentsInitially(action: ReturnType<typeof actions.initialGetRequest>) {
  try {
    const {params} = action.payload;
    const response: SagaReturnType<typeof commentsGet> = yield call(commentsGet, params);
    yield put(actions.initialGetSuccess(response.data, params));
  } catch (error) {
    yield put(actions.initialGetFailed(error));
  }
}

function* getComments(action: ReturnType<typeof actions.getRequest>) {
  try {
    const {params} = action.payload;
    const response: SagaReturnType<typeof commentsGet> = yield call(commentsGet, params);
    yield put(actions.getSuccess(response.data, params));
  } catch (error) {
    yield put(actions.getFailed(error));
  }
}

function* commentsSaga() {
  yield takeLatest(types.INITIAL_GET_REQUEST, getCommentsInitially)
  yield takeLatest(types.GET_REQUEST, getComments)
}

export default commentsSaga;
