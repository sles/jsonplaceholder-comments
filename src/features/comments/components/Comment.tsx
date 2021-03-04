import { Paper } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import type {AppComment as CommentProps} from '../ts';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
  },
  name: {
    margin: 0,
    textAlign: "left",
  },
  email: {
    textTransform: "lowercase"
  },
  body: {
    padding: theme.spacing(0.5, 0),
  }
}));


const Comment: React.FC<CommentProps> = ({name, body, email}) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Paper elevation={1} className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2} >
          <Grid item>
            <Avatar alt="Avatar" />
          </Grid>
          <Grid item >
            <Typography variant="h4" className={classes.name}>{name}</Typography>
            <Typography variant="caption" className={classes.email}>{email}</Typography>
            <Typography className={classes.body}>
              {body}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Comment;