import { createContext, useEffect, useState } from 'react';

const useThemeDetector = () => {
  const getCurrentTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e: any) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);

  return isDarkTheme ? 'dark' : 'light';
};

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const deviceTheme = useThemeDetector();
  const [themeMode, setThemeMode] = useState(deviceTheme);
  const theme = { themeMode, setThemeMode };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
