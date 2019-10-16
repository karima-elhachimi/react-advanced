import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './modules/login/Login';
import Home from './modules/home/Home';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
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
