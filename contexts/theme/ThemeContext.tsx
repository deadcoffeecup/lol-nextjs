import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useLayoutEffect,
} from 'react';

import { ThemeContextProps } from './types';

const ThemeContext = createContext<ThemeContextProps>({
  themeMode: 'light',
  setThemeMode: () => null,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isOSDarkTheme, setIsOSDarkTheme] = useState<boolean | undefined>(
    undefined
  );
  const [themeMode, setThemeMode] = useState<string>(
    isOSDarkTheme ? 'dark' : 'light'
  );

  useEffect(() => {
    setThemeMode(isOSDarkTheme ? 'dark' : 'light');
  }, [isOSDarkTheme]);
  useLayoutEffect(() => {
    const isDarkModeOn = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setIsOSDarkTheme(isDarkModeOn);
  }, []);

  useEffect(() => {
    const mqListener = (mqListEvent: MediaQueryListEvent) =>
      setIsOSDarkTheme(mqListEvent.matches);
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', (mqListEvent) =>
      mqListener(mqListEvent)
    );

    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);

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
