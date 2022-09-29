import React, { Children, ElementType, FC, ReactNode } from 'react';
import { useTheme } from '../contexts/theme/ThemeContext';

export const Layout: FC<any> = ({ children }) => {
  const { themeMode } = useTheme();

  return (
    <div
      style={{
        backgroundColor: themeMode === 'light' ? 'white' : '#223',
        color: themeMode === 'light' ? 'black' : 'white',
      }}
    >
      {children}
      <style jsx>{`
        div {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};
