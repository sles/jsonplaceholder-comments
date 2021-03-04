import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { StoreState } from '../../../store';
import { initialGetRequest, getRequest, postRequest } from '../redux/actions';
import { CommentPostParams, PaginationCommentsParams } from '../ts';

export default function useComments() {
  const { error, isLoading, data, params, initialLoading, initiallyLoaded, total, isPosting } = useSelector(
    (state: StoreState) => state.comments
  );

  const dispatch = useDispatch();

  const onGetComments = useCallback((params: PaginationCommentsParams) => !isLoading && dispatch(getRequest(params)),
    [dispatch, isLoading]
  );

  const onGetInitialComments = useCallback(() => !initialLoading && dispatch(initialGetRequest({limit: params.limit, offset: 0})), [dispatch, initialLoading, params]);

  const onPostComment = useCallback((data: CommentPostParams) => !isPosting && dispatch(postRequest(data)), [dispatch, isPosting]);

  return {
    isPosting,
    total,
    initialLoading,
    isLoading,
    data,
    error,
    params,
    initiallyLoaded,
    onGetInitialComments,
    onGetComments,
    onPostComment,
  };
}
