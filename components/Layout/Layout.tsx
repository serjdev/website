import React, { ReactNode } from "react";
import { Navbar } from "../Menu/navBar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};
