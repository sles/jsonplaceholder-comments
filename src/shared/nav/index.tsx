import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

import { Logo } from '../../shared';

const useStyles = makeStyles(() => ({

    title: {
      flexGrow: 1,
    },
  }),
);

const Nav = () => {
  const classes = useStyles();

  return (
    <Grid>
      <AppBar position='fixed' color='secondary'>
        <Toolbar disableGutters>
          <Logo />
          <Grid className={classes.title} />
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Nav;
