import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

import ApartmentSelect from '../Apartment/ApartmentSelect';

const ResidentForm = ({ formik }) => {
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do morador"
                onChange={formik.handleChange}
                value={formik.values.name}
                name="name"
                isInvalid={!!formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cpf do morador"
                onChange={formik.handleChange}
                value={formik.values.cpf}
                name="cpf"
                isInvalid={!!formik.errors.cpf}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.cpf}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                isInvalid={!!formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Data de nascimento</Form.Label>
              <Form.Control
                type="date"
                placeholder="Data de nascimento"
                onChange={formik.handleChange}
                value={formik.values.birth}
                name="birth"
                isInvalid={!!formik.errors.birth}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.birth}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Telefone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                name="phone"
                isInvalid={!!formik.errors.phone}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.phone}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Responsável</Form.Label>
              <Form.Control
                as="select"
                name="responsible"
                type="checkbox"
                value={formik.values.responsible}
                onChange={formik.handleChange}
              >
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Apartamento</Form.Label>
              <ApartmentSelect formik={formik} />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default ResidentForm;
