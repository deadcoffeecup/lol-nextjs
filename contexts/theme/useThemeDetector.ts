import { useEffect, useState } from 'react';

export const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    const mqListener = (e: any) => {
      setIsDarkTheme(e.matches);
    };
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);

  return isDarkTheme ? 'dark' : 'light';
};
