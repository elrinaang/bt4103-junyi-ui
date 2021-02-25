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
      main: '#37474f',
      dark: '#102027',
      light: '#62727b'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

export default theme;