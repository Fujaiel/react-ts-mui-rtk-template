import React from 'react';
import { CssBaseline, Button, Box, Typography } from '@mui/material';

import { ThemeContext } from './Theme/ThemeContext';
import { useContext } from 'react';

const App: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error(
      'ThemeContext is undefined, make sure ThemeProviderWrapper is used'
    );
  }

  const { themeMode, toggleTheme } = themeContext;
  console.log(themeMode);

  return (
    <>
      <CssBaseline />
      <Box sx={{ textAlign: 'center', mt: 4, p: 2 }}>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Custom MUI Theme Example
        </Typography>
        <Button
          onClick={() => toggleTheme('light')}
          variant="contained"
          color="primary"
          sx={{ borderRadius: 8, textTransform: 'none' }}
        >
          Light Theme
        </Button>
        <Button
          onClick={() => toggleTheme('dark')}
          variant="contained"
          color="secondary"
          sx={{ ml: 2, borderRadius: 8, textTransform: 'none' }}
        >
          Dark Theme
        </Button>
        <Button
          onClick={() => toggleTheme('purple')}
          variant="contained"
          sx={{
            ml: 2,
            bgcolor: 'secondary.main',
            borderRadius: 12,
            textTransform: 'uppercase',
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          Purple Theme
        </Button>
      </Box>
    </>
  );
};

export default App;

// import React, { useState } from 'react';
// import {
//   ThemeProvider,
//   CssBaseline,
//   Button,
//   Box,
//   Typography,
// } from '@mui/material';
// import { lightTheme, darkTheme, purpleTheme } from './Theme/Theme'; // Adjust the import based on your folder structure

// const App: React.FC = () => {
//   const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'purple'>(
//     'dark'
//   );

//   const getTheme = () => {
//     switch (themeMode) {
//       case 'dark':
//         return darkTheme;
//       case 'purple':
//         return purpleTheme;
//       default:
//         return lightTheme;
//     }
//   };

//   return (
//     <ThemeProvider theme={getTheme()}>
//       <CssBaseline />
//       <Box sx={{ textAlign: 'center', mt: 4, p: 2 }}>
//         <Typography variant="h1" sx={{ mb: 2 }}>
//           Custom MUI Theme Example
//         </Typography>
//         <Button
//           onClick={() => setThemeMode('light')}
//           variant="contained"
//           color="primary"
//           sx={{ borderRadius: 8, textTransform: 'none' }}
//         >
//           Light Theme
//         </Button>
//         <Button
//           onClick={() => setThemeMode('dark')}
//           variant="contained"
//           color="secondary"
//           sx={{ ml: 2, borderRadius: 8, textTransform: 'none' }}
//         >
//           Dark Theme
//         </Button>
//         <Button
//           onClick={() => setThemeMode('purple')}
//           variant="contained"
//           sx={{
//             ml: 2,
//             bgcolor: 'secondary.main',
//             borderRadius: 12,
//             textTransform: 'uppercase',
//             '&:hover': { bgcolor: 'primary.dark' },
//           }}
//         >
//           Purple Theme
//         </Button>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default App;
