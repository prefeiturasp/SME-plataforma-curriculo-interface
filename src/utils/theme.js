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
      root: {
        color: '#6a6a6a',
        fontSize: 12,
        fontWeight: 'bold',
        '&$selected': {
          color: '#008080',
        },
      },
    },
    MuiPrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: '#008080',
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: 13,
        fontWeight: 600,
        lineHeight: '18px',
      },
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
