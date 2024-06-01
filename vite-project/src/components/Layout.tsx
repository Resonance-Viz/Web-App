import React, { ReactNode } from 'react';
import Navbar from './Navbar'; // Adjust the import path accordingly

interface MainLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ height: '80px' }}></div> {/* Spacer div */}
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
