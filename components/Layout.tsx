import React, { Children, ElementType, FC, ReactNode } from 'react';

export const Layout: FC<any> = ({ children }) => {
  return (
    <div>
      <h2>Aplikacja o League of legends</h2>
      {children}
    </div>
  );
};
