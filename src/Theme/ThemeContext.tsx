import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme, purpleTheme } from './Theme.ts';

// Define the type for the theme context
interface ThemeContextType {
  themeMode: string;
  toggleTheme: (themeName: string) => void;
}

// Create the context with a default undefined value
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Define the available themes
const themes: Record<string, typeof lightTheme> = {
  light: lightTheme,
  dark: darkTheme,
  purple: purpleTheme,
};

// Define the props type for the ThemeProviderWrapper component
interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
}) => {
  // Get the saved theme from localStorage or default to "light"
  const storedTheme =
    (localStorage.getItem('appTheme') as keyof typeof themes) || 'light';
  const [themeMode, setThemeMode] = useState<string>(storedTheme);
  const [theme, setTheme] = useState(themes[storedTheme] || lightTheme);

  useEffect(() => {
    // Update the theme when `themeMode` changes
    setTheme(themes[themeMode] || lightTheme);

    // Save the selected theme to localStorage
    localStorage.setItem('appTheme', themeMode);
  }, [themeMode]);

  const toggleTheme = (themeName: string) => {
    setThemeMode(themeName);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
