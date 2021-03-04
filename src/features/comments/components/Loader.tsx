import Grid from '@material-ui/core/Grid';
import React, { Fragment } from 'react';

import { Loaders } from '../../../shared';
import useComments from '../hooks/useComments';

const CommentsLoader = () => {
  const {
    total,
    data,
    params: { limit },
  } = useComments();
  return (
    <Fragment>
      {Array.from(Array(total - data.length > limit ? limit : total - data.length).keys()).map(
        i => (
          <Grid key={i} item xs={12}>
            <Loaders.Comment />
          </Grid>
        ),
      )}
    </Fragment>
  );
};

export default CommentsLoader;
