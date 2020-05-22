import React from 'react';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { CreateApartmentSchema } from '../../validation';
import { ApartmentMutation } from '../../services/apollo';
import ApartmentForm from '../../components/Apartment/ApartmentForm';
import useBreadcrumb from '../../utils/hooks/useBreadcrumb';

export default function Apartment() {
  const history = useHistory();
  const { addToast } = useToasts();
  useBreadcrumb([
    {
      title: 'Home',
      to: '/home',
    },
    {
      title: 'Apartamentos',
      to: '/apartment',
    },
    { title: 'Cadastro' },
  ]);
  const [createApartment] = useMutation(ApartmentMutation.CREATE_APARTMENT, {
    onError: (err) => {
      addToast(err.graphQLErrors[0].message, { appearance: 'error' });
    },
    onCompleted: () => {
      addToast('Apartamento cadastrado!', { appearance: 'success' });
      formik.setSubmitting(false);
      history.push('/apartment');
    },
  });

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
        </div>
        <ApartmentForm formik={formik} />
      </Container>
    </React.Fragment>
  );
}
