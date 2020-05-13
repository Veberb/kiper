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
          />
          {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
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
              />
              {formik.errors.number && formik.touched.number ? <div>{formik.errors.number}</div> : null}
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
              />
              {formik.errors.block && formik.touched.block ? <div>{formik.errors.block}</div> : null}
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
