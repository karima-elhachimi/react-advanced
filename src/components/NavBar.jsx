import React from 'react';
import { Link } from 'react-router-dom';

import jsLogo from '../public/images/js-logo.png';

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={jsLogo} alt="Bootcamp Logo" height={30} width={30} className="d-inline-block align-top" /> Bootcamp
      </Link>
      <Link to="/login">Log in</Link>
    </nav>
  );
}

export default NavBar;
