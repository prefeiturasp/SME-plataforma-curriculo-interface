import { createMuiTheme } from '@material-ui/core/styles';

const appTheme = createMuiTheme({
  overrides: {
    MuiFormHelperText: {
      root: {
        bottom: '-18px',
        position: 'absolute',
      },
    },
    MuiInput: {
      input: {
        fontWeight: 'bold',
      }
    },
  },
  palette: {
    primary: {
      main: '#252525',
    },
    secondary: {
      main: '#6a6a6a',
    },
    error: {
      main: '#fa403c',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    useNextVariants: true,
  },
});

export default appTheme;
