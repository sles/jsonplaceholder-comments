import { useMemo, useRef } from 'react';
import useComments from './useComments';

export default function useInfiniteComments() {
  const {
    data,
    total,
    params: { limit, offset },
    onGetComments,
    initiallyLoaded,
    isLoading,
  } = useComments();
  const loadingOffset = useRef(limit / 2).current;

  const allowLoading = useMemo(() => data.length < total, [data.length, total])

  const handleCommentsLoading = (id: number) => {
    const postIndex = data.findIndex(post => post.id === id);
    if (!isLoading && initiallyLoaded && data.length - loadingOffset <= postIndex && allowLoading) {
      onGetComments({ limit, offset: offset + limit });
    }
  };

  const handleChange = (id: number) => (isVisible: boolean) => {
    if (isVisible) {
      handleCommentsLoading(id);
    }
  };

  return { handleChange };
}
