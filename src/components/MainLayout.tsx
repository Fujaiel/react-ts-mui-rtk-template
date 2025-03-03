import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ThemeContext } from '../Theme/ThemeContext';

const MainLayout: React.FC = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Box sx={{ textAlign: 'center', mt: 4, p: 2 }} typography={themeMode}>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Custom MUI Theme Example
        </Typography>
        <Button onClick={() => toggleTheme('light')} variant="contained" color="primary">
          Light Theme
        </Button>
        <Button
          onClick={() => toggleTheme('dark')}
          variant="contained"
          color="secondary"
          sx={{ ml: 2 }}
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

export default MainLayout;
