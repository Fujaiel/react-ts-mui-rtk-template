import React from 'react';
import { CssBaseline } from '@mui/material';

import ThemeProviderWrapper from './Theme/ThemeContext';

import MainLayout from './components/MainLayout';

const App: React.FC = () => {
  return (
    <>
      <ThemeProviderWrapper>
        <CssBaseline />
        <MainLayout />
      </ThemeProviderWrapper>
    </>
  );
};

export default App;
