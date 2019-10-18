import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './modules/login/Login';
import Home from './modules/home/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

export function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid main">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
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
