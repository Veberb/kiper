import React, { useState, useEffect } from 'react';

import { Form, Row, Col, Button } from 'react-bootstrap';

const ApartmentForm = ({ formik }) => {
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do apartamento"
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            isInvalid={!!formik.errors.name}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Número</Form.Label>
              <Form.Control
                type="number"
                placeholder="Número"
                onChange={formik.handleChange}
                value={formik.values.number}
                name="number"
                isInvalid={!!formik.errors.number}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.number}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Bloco</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bloco"
                onChange={formik.handleChange}
                value={formik.values.block}
                name="block"
                isInvalid={!!formik.errors.block}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.block}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ApartmentForm;
