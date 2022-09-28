import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      "IRANSansX",
      "sans-serif"
    ].join(",")
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1700,
    },
  },
  palette: {
    primary: {
      main: '#FE8B3B',
    },
    secondary: {
      main: '#0576C6',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
