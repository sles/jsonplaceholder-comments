import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../shared';

const Comments = lazy(() => import('../features/comments'));

const CommentsPage = () => (
  <Fragment>
    <Title description="Comments from jsonplaceholder API" title={`Comments | ${BRAND.name}`} />
    <Comments/>
  </Fragment>
)

export default CommentsPage;
