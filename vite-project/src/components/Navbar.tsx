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
        height: {xs:'80px', md:'100px', xl:'120px'}, 
        justifyContent: 'center', 
        backgroundColor: blue[700] 
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'center', 
          minHeight: '80px !important',
          scale: {xs:'100%', md:'125%', xl:'150%'}
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
          View Stats
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
          Submit UID
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
