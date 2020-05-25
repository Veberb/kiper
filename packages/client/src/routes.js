import React from 'react';

import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import Apartment from './pages/Apartment/CreateApartment';
import EditApartment from './pages/Apartment/EditApartment';
import ListApartment from './pages/Apartment';

import ListResidents from './pages/Resident';
import CreateResident from './pages/Resident/CreateResident';
import EditResident from './pages/Resident/EditResident';

import RegisterUser from './pages/Auth/Register';
import LoginUser from './pages/Auth/Login';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Breadcrumb from './components/Breadcrumb';

const Routes = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <Router>
      <Container>
        <Row className="rowMargin">
          <Col sm={10}>
            <Breadcrumb></Breadcrumb>
          </Col>
          <Col sm={2}>
            <Button variant="primary" onClick={() => logout()}>
              Sair
            </Button>
          </Col>
        </Row>
      </Container>

      <Switch>
        <Route exact path="/register" component={RegisterUser} />
        <Route exact path="/resident/create" component={CreateResident} />
        <Route exact path="/resident/:id" component={EditResident} />
        <Route exact path="/resident" component={ListResidents} />
        <Route exact path="/apartment/create" component={Apartment} />
        <Route exact path="/apartment/:id/resident" component={ListResidents} />
        <Route exact path="/apartment/:id" component={EditApartment} />
        <Route exact path="/apartment" component={ListApartment} />
        <Route exact path="/" component={LoginUser} />
      </Switch>
    </Router>
  );
};

export default Routes;
