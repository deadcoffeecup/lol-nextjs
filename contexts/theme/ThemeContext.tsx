import { createContext, useMemo, useState } from 'react';
import { useThemeDetector } from './useThemeDetector';

const ThemeContext = createContext({});

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
