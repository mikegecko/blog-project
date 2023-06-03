import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#3349c4',
      },
      secondary: {
        main: '#ae33c4',
      },
      error: {
        main: '#c43349',
      },
      background: {
        main: '#242424',
        default: '#121212',
      },
    },
  });

  export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#3349c4',
      },
      secondary: {
        main: '#ae33c4',
      },
      error: {
        main: '#c43349',
      },
      background: {
        default: '#F1F1F1',
        paper: '#fff',
      },
    },
  });

