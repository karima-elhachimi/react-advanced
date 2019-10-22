import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoggedOnContext from '../login/loggedOnContext';
import logoPath from '../../public/images/js-logo.png';
function Navbar() {
  const { loggedInUser } = useContext(LoggedOnContext);
  console.log({ loggedInUser });
  return (
    <nav className="navbar navbar-light bg-light" role="navigation">
      <a className="navbar-brand" href="/">
        <img src={logoPath} width="30" height="30" className="d-inline-block align-top" alt="Bootcamp Logo" />
        Bootcamp
      </a>
      <Link to="/todos">
        <span>Todo's</span>
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
