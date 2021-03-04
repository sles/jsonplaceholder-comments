import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import { NotFound, Comments } from '../pages';
import { Errors, Layout, Loaders } from '../shared';

const Routes = () => (
  <Layout.Root>
    <Errors.Boundary>
      <Suspense fallback={<Loaders.Page />}>
        <Switch>
          <Route path={ROUTES.root} exact render={() => <Redirect to={ROUTES.main} />} />
          <Route exact path={ROUTES.main} component={Comments} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Errors.Boundary>
  </Layout.Root>
);

export default Routes;
