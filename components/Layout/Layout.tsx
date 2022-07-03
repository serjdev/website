import React, { ReactNode } from "react";
import { Navbar } from "../Menu/navBar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
