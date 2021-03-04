import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing( 1),
  },
  comment: {
    borderRadius: theme.spacing( 0.5),
    height: theme.spacing( 13),
  },
}));


const CommentLoader = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Skeleton width="100%" variant="rect" className={classes.comment} />
    </Grid>
  );
};

export default memo(CommentLoader);
