import type { Reducer } from 'redux';
import type { Nullable } from '../../../ts-types';
import type { PaginationCommentsParams, AppComment } from '../ts';
import type { CommentsActions } from './actions';
import * as types from './types';

const INITIAL_STATE = {
  data: [] as AppComment[],
  isLoading: false,
  isPosting: false,
  initialLoading: false,
  initiallyLoaded: false,
  // usually returns from the API, but https://jsonplaceholder.typicode.com does not, so it is hardcoded
  total: 500,
  params: {
    limit: 20,
    offset: 0,
  } as PaginationCommentsParams,
  error: null as Nullable<Error>,
};

const reducer: Reducer<typeof INITIAL_STATE, CommentsActions> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case types.INITIAL_GET_REQUEST: {
      return {
        ...state,
        data: [],
        initiallyLoaded: false,
        initialLoading: true,
        error: null,
      };
    }
    case types.INITIAL_GET_SUCCESS: {
      const { data, params } = action.payload;
      return {
        ...state,
        data,
        params,
        initialLoading: false,
        initiallyLoaded: true,
      };
    }
    case types.INITIAL_GET_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        initialLoading: false,
        error,
      };
    }
    case types.GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case types.GET_SUCCESS: {
      const { data, params } = action.payload;
      return {
        ...state,
        data: [...state.data, ...data],
        params,
        isLoading: false,
      };
    }
    case types.GET_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    case types.POST_REQUEST: {
      return {
        ...state,
        isPosting: true,
      };
    }
    case types.POST_SUCCESS:
    case types.POST_FAILED: {
      return {
        ...state,
        isPosting: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
