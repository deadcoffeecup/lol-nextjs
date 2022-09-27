import { Dispatch, SetStateAction } from 'react';

export interface ThemeContextProps {
  themeMode: string;
  setThemeMode: Dispatch<SetStateAction<string>>;
}
