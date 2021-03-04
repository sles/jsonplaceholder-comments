import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';

import { Nav, Footer } from '../../shared';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    position: 'relative',
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(7),
    },
  },
  content: {
    flex: 1,
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1),
    },
  },
}));

type Props = {
  children: NonNullable<ReactNode>;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column" justify="center">
      <Nav />
      <Grid container className={classes.content} justify="center">
        <Container className={classes.container}>{children}</Container>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default RootLayout;
