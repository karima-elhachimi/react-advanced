import React, { useState, useMemo } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import IdentityContext from './contexts/IdentityContext';
import Login from './modules/login/Login';
import Home from './modules/home/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

export function App() {
  const [currentIdentity, setCurrentIdentity] = useState();

  const identityContextValue = useMemo(
    () => ({
      current: currentIdentity,
      setCurrent: setCurrentIdentity,
    }),
    [currentIdentity]
  );

  return (
    <IdentityContext.Provider value={identityContextValue}>
      <NavBar />
      <div className="container-fluid main">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </IdentityContext.Provider>
  );
}

function RoutedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default hot(RoutedApp);
