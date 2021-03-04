import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { Overrides } from '@material-ui/core/styles/overrides';

const getOverrides = (): Overrides => ({});

export default createMuiTheme({
  palette: {
    primary: {
      light: '#56c8d8',
      main: '#0097a7',
      dark: '#006978',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8d838e',
      main: '#605661',
      dark: '#362d37',
      contrastText: '#fff',
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.17rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '0.83rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '0.67rem',
    },
    fontFamily: ['WorkSans', 'Open Sans', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: getOverrides(),
});
