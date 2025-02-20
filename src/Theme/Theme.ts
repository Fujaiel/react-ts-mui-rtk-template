import { createTheme, ThemeOptions } from '@mui/material/styles';

const commonSettings: ThemeOptions = {
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
};

const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#ff4081' },
    background: { default: '#ffffff', paper: '#f5f5f5' },
    text: { primary: '#212121', secondary: '#757575' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2rem', fontWeight: 600 },
    h2: { fontSize: '1.75rem', fontWeight: 500 },
    body1: { fontSize: '1rem' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'dark',
    primary: { main: '#bb86fc' },
    secondary: { main: '#03dac6' },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#ffffff', secondary: '#b0bec5' },
  },
  typography: lightTheme.typography,
  components: lightTheme.components,
});

const purpleTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'light',
    primary: { main: '#9c27b0' },
    secondary: { main: '#ff4081' },
    background: { default: '#f3e5f5', paper: '#e1bee7' },
    text: { primary: '#4a148c', secondary: '#7b1fa2' },
  },
  typography: {
    fontFamily: '"Poppins", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    body1: { fontSize: '1rem' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'uppercase',
        },
      },
    },
  },
});

export { lightTheme, darkTheme, purpleTheme };

// import { createTheme, ThemeOptions } from '@mui/material/styles';

// // Define color palettes
// const lightPalette = {
//   mode: 'light' as const,
//   primary: {
//     main: '#1976d2',
//   },
//   secondary: {
//     main: '#dc004e',
//   },
//   background: {
//     default: '#f5f5f5',
//     paper: '#ffffff',
//   },
// };

// const darkPalette = {
//   mode: 'dark' as const,
//   primary: {
//     main: '#90caf9',
//   },
//   secondary: {
//     main: '#f48fb1',
//   },
//   background: {
//     default: '#121212',
//     paper: '#1d1d1d',
//   },
// };

// const purplePalette = {
//   mode: 'dark' as const,
//   primary: {
//     main: '#9c27b0',
//   },
//   secondary: {
//     main: '#ff4081',
//   },
//   background: {
//     default: '#2a0f38',
//     paper: '#3b1c4f',
//   },
// };

// // Typography settings
// const typography = {
//   fontFamily: "'Roboto', sans-serif",
//   h1: {
//     fontSize: '2.5rem',
//     fontWeight: 700,
//   },
//   body1: {
//     fontSize: '1rem',
//   },
// };

// // Spacing, breakpoints, zIndex, transitions
// const spacing = 8;
// const breakpoints = {
//   values: {
//     xs: 0,
//     sm: 600,
//     md: 960,
//     lg: 1280,
//     xl: 1920,
//   },
// };
// const zIndex = {
//   appBar: 1100,
//   drawer: 1200,
// };
// const transitions = {
//   duration: {
//     shortest: 150,
//     shorter: 200,
//     short: 250,
//     standard: 300,
//     complex: 375,
//     enteringScreen: 225,
//     leavingScreen: 195,
//   },
// };

// // Component overrides
// const components = {
//   MuiButton: {
//     styleOverrides: {
//       root: {
//         borderRadius: 8,
//         textTransform: 'none',
//         variants: [],
//       },
//     },
//   },
//   MuiPaper: {
//     styleOverrides: {
//       root: {
//         padding: spacing,
//       },
//     },
//   },
// };

// // Function to create theme
// const createCustomTheme = (
//   palette: typeof lightPalette | typeof darkPalette
// ): ThemeOptions =>
//   createTheme({
//     palette,
//     typography,
//     spacing,
//     breakpoints,
//     zIndex,
//     transitions,
//     components,
//   });

// export const lightTheme = createCustomTheme(lightPalette);
// export const darkTheme = createCustomTheme(darkPalette);
// export const purpleTheme = createCustomTheme(purplePalette);
