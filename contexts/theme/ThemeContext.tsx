import { createContext, useContext, useMemo, useState } from 'react';
import { useThemeDetector } from './useThemeDetector';
import { ThemeContextProps } from './types';

const ThemeContext = createContext<ThemeContextProps>({
  themeMode: 'light',
  setThemeMode: () => null,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const deviceTheme = useThemeDetector();
  const [themeMode, setThemeMode] = useState(deviceTheme);
  const themeValues = { themeMode, setThemeMode };
  return useMemo(
    () => (
      <ThemeContext.Provider value={themeValues}>
        {children}
      </ThemeContext.Provider>
    ),
    [themeValues]
  );
};
