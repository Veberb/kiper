import React from 'react';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import { CreateApartmentSchema } from '../../validation';
import { ApartmentMutation } from '../../services/apollo';
import ApartmentForm from '../../components/Apartment/ApartmentForm';

export default function Apartment() {
  const [createApartment] = useMutation(ApartmentMutation.CREATE_APARTMENT);
  const history = useHistory();

  const formik = useFormik({
    initialValues: { name: '', number: 0, block: '' },
    validationSchema: CreateApartmentSchema,
    onSubmit: async (values) => {
      await createApartment({ variables: { apartment: values } });
      history.push('/home');
    },
  });
  return (
    <React.Fragment>
      <Container>
        <div>
          <h1>Cadastro Apartamento</h1>
        </div>
        <ApartmentForm formik={formik} />
      </Container>
    </React.Fragment>
  );
}
