import React from 'react';
import { Link } from 'react-router-dom';

//TODO: Fix styling
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">View</Link>
        </li>
        <li>
          <Link to="/submit">Submit</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
