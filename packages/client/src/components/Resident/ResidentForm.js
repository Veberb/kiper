import React from 'react';

import { Form, Row, Col, Button } from 'react-bootstrap';

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
              />
              {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
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
              />
              {formik.errors.cpf && formik.touched.cpf ? <div>{formik.errors.cpf}</div> : null}
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
              />
              {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
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
              />
              {formik.errors.birth && formik.touched.birth ? <div>{formik.errors.birth}</div> : null}
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
              />
              {formik.errors.phone && formik.touched.phone ? <div>{formik.errors.phone}</div> : null}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Responsável</Form.Label>
              <Form.Control as="select" value={formik.values.responsible} onChange={formik.handleChange}>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Form.Control>
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

export default ResidentForm;
