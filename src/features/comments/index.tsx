import React, { useEffect } from 'react';
import useComments from './hooks/useComments';
import {AllComments} from './components';

const Comments = () => {
  const {onGetInitialComments, initiallyLoaded} = useComments();
  useEffect(() => {
    if (!initiallyLoaded) {
      onGetInitialComments();
    }
  }, [initiallyLoaded, onGetInitialComments])

  return (
    <AllComments/>
  )
}

export default Comments;