import { put, takeLatest, call, SagaReturnType } from 'redux-saga/effects';

import { commentPost, commentsGet } from '../api';
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

function* postComment(action: ReturnType<typeof actions.postRequest>) {
  try {
    const {data} = action.payload;
    yield call(commentPost, data);
    yield put(actions.postSuccess());
  } catch (error) {
    yield put(actions.postFailed());
  }
}

function* commentsSaga() {
  yield takeLatest(types.INITIAL_GET_REQUEST, getCommentsInitially)
  yield takeLatest(types.GET_REQUEST, getComments)
  yield takeLatest(types.POST_REQUEST, postComment)
}

export default commentsSaga;
