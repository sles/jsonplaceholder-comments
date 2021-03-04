import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { StoreState } from '../../../store';
import { initialGetRequest, getRequest } from '../redux/actions';
import { PaginationCommentsParams } from '../ts';

export default function useComments() {
  const { error, isLoading, data, params, initialLoading, initiallyLoaded, total } = useSelector(
    (state: StoreState) => state.comments
  );

  const dispatch = useDispatch();

  const onGetComments = useCallback((params: PaginationCommentsParams) => !isLoading && dispatch(getRequest(params)),
    [dispatch, isLoading]
  );

  const onGetInitialComments = useCallback(() => !initialLoading && dispatch(initialGetRequest({limit: params.limit, offset: 0})), [dispatch, initialLoading, params]);


  return {
    total,
    initialLoading,
    isLoading,
    data,
    error,
    params,
    initiallyLoaded,
    onGetInitialComments,
    onGetComments,
  };
}
