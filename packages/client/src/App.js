import React from 'react';
import './App.css';
import { ToastProvider } from 'react-toast-notifications';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Breadcrumb from './components/Breadcrumb';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <div className="card">
        <BrowserRouter>
          <ToastProvider autoDismiss autoDismissTimeout={3500}>
            <Container>
              <Row className="rowMargin">
                <Col sm={8}>
                  <Breadcrumb></Breadcrumb>
                </Col>
                <Col sm={2}>
                  <Button variant="primary">Sair</Button>
                </Col>
              </Row>
            </Container>
            <Routes />
          </ToastProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
