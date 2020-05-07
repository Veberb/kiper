import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import { useMutation } from '@apollo/react-hooks';

import { CreateApartmentSchema } from '../../validation';
import client, { ApartmentMutation } from '../../services/apollo';
//import { CREATE_APARTMENT } from '../../mutation';

export default function Apartment() {
  //const [createApartment, { data }] = useMutation(CREATE_APARTMENT);
  // usar hooks do formik, e altera para usar useMutation;
  return (
    <React.Fragment>
      <Container>
        <div>
          <h1>Cadastro Apartamento</h1>
          <Formik
            initialValues={{ name: '', number: 0, block: '' }}
            validationSchema={CreateApartmentSchema}
            onSubmit={async (values, actions) => {
              await client.mutate({
                mutation: ApartmentMutation.CREATE_APARTMENT,
                variables: {
                  apartment: values,
                },
              });
            }}
          >
            {({ handleSubmit, handleChange, values, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nome do apartamento"
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                  />
                  {errors.name && touched.name ? <div>{errors.name}</div> : null}
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Número</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Número"
                        onChange={handleChange}
                        value={values.number}
                        name="number"
                      />
                      {errors.number && touched.number ? <div>{errors.number}</div> : null}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Bloco</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Bloco"
                        onChange={handleChange}
                        value={values.block}
                        name="block"
                      />
                      {errors.block && touched.block ? <div>{errors.block}</div> : null}
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </React.Fragment>
  );
}
