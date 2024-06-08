import React, { ReactNode } from 'react';
import Navbar from './Navbar'; // Adjust the import path accordingly

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import MobileDrawer from './MobileLayout';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#303030',
      paper: '#424242',
    },
  },
});

interface MainLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<MainLayoutProps> = ({ children }) => {

  const isLargeScreen = useMediaQuery('(min-width:960px)');
  
  return (
    <ThemeProvider theme={darkTheme}>
      {isLargeScreen ? <Navbar /> : <MobileDrawer />}
      <div style={{ height: '80px' }}></div> {/* Spacer div */}
      <main>
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;
