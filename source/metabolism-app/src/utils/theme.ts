'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "--font-geist-mono",
  },
  palette: {
    primary: {
      main: '#2a7fff',
      second: '#01609C',
    },
  },
});

export default theme;
