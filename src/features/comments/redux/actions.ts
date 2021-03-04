import type { PaginationCommentsParams, AppComment  } from '../ts';
import * as types from './types';

export const initialGetRequest = (params: PaginationCommentsParams) => ({
  type: types.INITIAL_GET_REQUEST,
  payload: {
    params,
  }
});

export const initialGetSuccess = (data: AppComment[], params: PaginationCommentsParams) => ({
  type: types.INITIAL_GET_SUCCESS,
  payload: {
    data,
    params,
  },
});

export const initialGetFailed = (error: Error) => ({
  type: types.INITIAL_GET_FAILED,
  payload: {
    error,
  },
});

export const getRequest = (params: PaginationCommentsParams) => ({
  type: types.GET_REQUEST,
  payload: {
    params,
  }
});

export const getSuccess = (data: AppComment[], params: PaginationCommentsParams) => ({
  type: types.GET_SUCCESS,
  payload: {
    data,
    params,
  },
});

export const getFailed = (error: Error) => ({
  type: types.GET_FAILED,
  payload: {
    error,
  },
});

export type CommentsActions = ReturnType<
  | typeof initialGetRequest
  | typeof initialGetSuccess
  | typeof initialGetFailed
  | typeof getRequest
  | typeof getSuccess
  | typeof getFailed
  >;
