import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  progress: {
    zIndex: 2,
  },
}));

export type BasicLoaderProps = Pick<CircularProgressProps, 'thickness' | 'color'> & {
  size?: number;
  background?: string;
};

const BasicLoader: React.FC<BasicLoaderProps> = ({
  thickness = 3.6,
  size = 40,
  color = 'primary',
  background = grey[200],
}) => {
  const classes = useStyles({ size, thickness, background });
  return (
    <Grid>
      <CircularProgress color={color} size={size} thickness={thickness} className={classes.progress} />
    </Grid>
  );
};

export default BasicLoader;
