import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiFormHelperText: {
      root: {
        bottom: -18,
        position: 'absolute',
      },
    },
    MuiInput: {
      input: {
        fontWeight: 'bold',
      },
    },
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderColor: '#3bd2da',
          borderWidth: 1,
        },
      },
    },
    MuiSelect: {
      select: {
        fontSize: 15,
        fontWeight: 'bold',
      },
    },
    MuiTab: {
      label: {
        color: '#6a6a6a',
        fontSize: 12,
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

export default theme;
