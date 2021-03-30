import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000'
    },
    secondary: {
      main: '#333366',
      dark: '#102027',
      light: '#62727b'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F8F8F8',
    },
    info: { 
      main: '#FF9933'
    }
  },
  typography: {
    fontFamily: ['"Montserrat"', 'Open Sans'].join(',')
  },
  overrides: { 
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: '#333366',
        },
        '&$active': {
          color: '#333366',
        },
        "&$disabled": {
          color: '#333366'
        }
      }
    }
  }
});

export default theme;