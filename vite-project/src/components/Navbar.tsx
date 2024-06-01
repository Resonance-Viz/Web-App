import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../assets/logo/T_ChatEmo_A_01.png'; 

const Navbar = () => {
  return (
    <AppBar position="static" style={{ width: '100%' }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <img src={logo} alt="Logo" style={{ height: '80px', marginRight: '12px' }} />
        <Button color="inherit" component={Link} to="/" sx={{ textDecoration: 'none', fontSize: '18px' }}>View</Button>
        <Button color="inherit" component={Link} to="/submit" sx={{ textDecoration: 'none', fontSize: '18px' }}>Submit</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
