import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import jsLogo from '../public/images/js-logo.png';
import IdentityContext from '../contexts/IdentityContext';

function NavBar() {
  const { current: currentUser } = useContext(IdentityContext);

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={jsLogo} alt="Bootcamp Logo" height={30} width={30} className="d-inline-block align-top" /> Bootcamp
      </Link>
      {currentUser ? <Link to="/logout">Log Out</Link> : <Link to="/login">Log In</Link>}
    </nav>
  );
}

export default NavBar;
