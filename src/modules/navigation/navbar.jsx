import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoggedOnContext from '../login/loggedOnContext';
import logoPath from '../../public/images/js-logo.png';
function Navbar() {
  const { loggedInUser } = useContext(LoggedOnContext);

  return (
    <nav className="navbar navbar-light bg-light" role="navigation">
      <Link to="/" className="navbar-brand">
        <img src={logoPath} width="30" height="30" className="d-inline-block align-top" alt="Bootcamp Logo" />
        Bootcamp
      </Link>
      <Link to="/todos" className="navbar-brand">
        todos
      </Link>

      {loggedInUser ? (
        <Link to="/logout">
          <span>log-out</span>
        </Link>
      ) : (
        <Link to="/login">
          <span>log-in</span>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
