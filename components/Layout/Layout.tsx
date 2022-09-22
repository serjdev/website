import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Navbar } from '../Menu/navBar';

interface LayoutProps {
  children: ReactNode;
  noImage?: boolean;
}

export function Layout({ children, noImage }: LayoutProps) {
  return (
    <div
      className={clsx(' min-h-screen', {
        "bg-[url('/bg.jpg')] bg-cover bg-no-repeat": !noImage,
        'bg-bgBlack': noImage,
      })}
    >
      <Navbar />
      {children}
    </div>
  );
}
