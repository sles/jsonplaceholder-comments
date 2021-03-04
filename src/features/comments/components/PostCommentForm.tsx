import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useMemo, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import useComments from '../hooks/useComments';
import { CommentPostParams } from '../ts';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 2,
    position: 'sticky',
    top: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      top: theme.spacing(7),
    },
    padding: theme.spacing(1),
  },
  form: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing(1),
  },
  title: {
    padding: theme.spacing(1, 0),
  },
  field: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0.5),
    },
  },
  buttonContainer: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0.5),
    },
  },
}));

const INITIAL_STATE: CommentPostParams = {
  email: '',
  name: '',
  body: '',
};


const PostCommentForm = () => {
  const classes = useStyles();
  const [state, setState] = useState<typeof INITIAL_STATE>(INITIAL_STATE);
  const { isPosting, onPostComment } = useComments();
  const handleState = (type: keyof typeof state) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [type]: e.target.value });
  };

  const isValid = useMemo(() => Object.keys(state).every(k => Boolean(state[k as keyof typeof state])) && isEmail(state.email), [state]);

  const clearState = () => setState(INITIAL_STATE);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPostComment(state);
    clearState();
  };
  return (
    <Grid className={classes.root}>
      <form className={classes.form} onSubmit={onSubmit}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant='h3' component='h1' className={classes.title}>
            Post a comment
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={6} className={classes.field}>
              <TextField
                required
                fullWidth
                size='small'
                id='name'
                label='Name'
                variant='outlined'
                onChange={handleState('name')}
                value={state.name}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.field}>
              <TextField
                required
                fullWidth
                size='small'
                id='email'
                label='Email'
                variant='outlined'
                type='email'
                error={!!state.email && !isEmail(state.email)}
                helperText={!!state.email && !isEmail(state.email) ? 'Email is not valid' : undefined}
                onChange={handleState('email')}
                value={state.email}
              />
            </Grid>
            <Grid item xs={12} className={classes.field}>
              <TextField
                required
                fullWidth
                multiline
                size='small'
                id='body'
                label='Message'
                variant='outlined'
                onChange={handleState('body')}
                value={state.body}
              />
            </Grid>
            <Grid container justify='flex-end' className={classes.buttonContainer}>
              <Button disabled={isPosting || !isValid} type='submit' variant='contained' size='small' color='primary'>
                Save
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Grid>
  );
};

export default PostCommentForm;