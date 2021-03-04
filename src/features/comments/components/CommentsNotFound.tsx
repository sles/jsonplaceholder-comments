import { SvgIconTypeMap } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import MessageIcon from '@material-ui/icons/Message';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    padding: theme.spacing(1, 0),
  },
  paper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    padding: theme.spacing(2, 1),
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: theme.spacing(12),
  },
  text: {
    zIndex: 2,
    fontWeight: 600,
  },
  iconContainer: {
    zIndex: 1,
    position: 'absolute',
  },
  icon: {
    opacity: 0.4,
    color: grey[400],
    fontSize: theme.spacing(10),
  },
}));

type Props = {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap>;
};

const CommentsNotFound: React.FC<Props> = ({ title, Icon = MessageIcon }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="center" alignItems="center">
      <Grid className={classes.paper}>
        <Grid container justify="center" alignItems="center" className={classes.iconContainer}>
          <Icon className={classes.icon} />
        </Grid>
        <Typography variant="h4" component="h2" className={classes.text}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CommentsNotFound;
