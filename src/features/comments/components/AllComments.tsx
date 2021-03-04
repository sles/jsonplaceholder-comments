import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Comment, CommentsNotFound, Loader } from '../components';
import useComments from '../hooks/useComments';
import useInfiniteComments from '../hooks/useInfiniteComments';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 1,
    height: '100%',
    padding: theme.spacing(3, 0),
  },
  anchor: {
    position: 'absolute',
    marginTop: theme.spacing(-9),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(-8),
    },
  },
}));

const AllComments = () => {
  const classes = useStyles();
  const { data, initiallyLoaded, isLoading, initialLoading } = useComments();
  const { handleChange } = useInfiniteComments();
  return (
    <Grid className={classes.root}>
      <Grid container>
        {data.map(comment => (
          <Grid key={`${comment.id}${comment.postId}`} item xs={12}>
            <VisibilitySensor onChange={handleChange(comment.id)} delayedCall>
              <Comment {...comment} />
            </VisibilitySensor>
          </Grid>
        ))}
         {(isLoading || initialLoading) && <Loader />}
      </Grid>
      {initiallyLoaded && !data.length && <CommentsNotFound title='Comments not found...' />}
    </Grid>
  );
};

export default AllComments;