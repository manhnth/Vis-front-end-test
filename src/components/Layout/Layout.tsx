import React, { ReactNode } from 'react';
import s from 'Layout.module.css';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={s.layout}>{children}</div>;
};
