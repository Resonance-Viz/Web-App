import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../assets/logo/T_ChatEmo_A_01.png'; 
import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';

const Navbar = () => {
  return (
    <AppBar 
      position='fixed'
      sx={{ 
        height: '80px', 
        justifyContent: 'center', 
        backgroundColor: blue[700] 
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'center', 
          margin: 0, 
          padding: 0,
          minHeight: '80px !important'
        }}
      >
        <Box 
          component="img" 
          src={logo} 
          alt="Logo" 
          sx={{ 
            height: '80px', 
            marginRight: '12px' 
          }} 
        />
        <Button 
          color="inherit" 
          component={Link} 
          to="/" 
          sx={{ 
            textDecoration: 'none', 
            fontSize: '18px' 
          }}
        >
          View
        </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to="/submit" 
          sx={{ 
            textDecoration: 'none', 
            fontSize: '18px' 
          }}
        >
          Submit
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
