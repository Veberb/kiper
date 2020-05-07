import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';

import { CreateApartmentSchema } from '../../validation';
import { ApartmentMutation } from '../../services/apollo';

export default function Apartment() {
  const [createApartment] = useMutation(ApartmentMutation.CREATE_APARTMENT);

  const formik = useFormik({
    initialValues: { name: '', number: 0, block: '' },
    validationSchema: CreateApartmentSchema,
    onSubmit: async (values) => {
      await createApartment({ variables: { apartment: values } });
    },
  });
  return (
    <React.Fragment>
      <Container>
        <div>
          <h1>Cadastro Apartamento</h1>

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
        </div>
      </Container>
    </React.Fragment>
  );
}
