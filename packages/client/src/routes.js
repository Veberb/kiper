import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Apartment from './pages/Apartment';
import EditApartment from './pages/Apartment/EditApartment';
import ListResidents from './pages/Resident';
import CreateResident from './pages/Resident/CreateResident';
import EditResident from './pages/Resident/EditResident';
import Home from './pages/Home';

const Routes = () => {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/resident/create" component={CreateResident} />
              <Route path="/resident/:id" component={EditResident} />
              <Route path="/resident" component={ListResidents} />
              <Route path="/apartment/:id/resident" component={ListResidents} />
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
