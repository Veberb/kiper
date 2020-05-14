import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Apartment from './pages/Apartment';
import EditApartment from './pages/Apartment/EditApartment';
import Home from './pages/Home';

const Routes = () => {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/apartment/:id" component={EditApartment} />
              <Route path="/apartment" component={Apartment} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Routes;
