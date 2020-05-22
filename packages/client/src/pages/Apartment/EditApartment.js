import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { CreateApartmentSchema } from '../../validation';
import { ApartmentMutation, ApartmentQuery } from '../../services/apollo';
import ApartmentForm from '../../components/Apartment/ApartmentForm';
import useBreadcrumb from '../../utils/hooks/useBreadcrumb';

export default function Apartment() {
  const { id } = useParams();
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
    { title: 'Edição' },
  ]);

  const [initialValues, setInitialValues] = useState({ name: '', block: '', number: 0 });

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: CreateApartmentSchema,
    onSubmit: async (values) => {
      await updateApartment({ variables: { apartment: values, id } });
    },
  });

  const setFormikInitialValue = (value) => {
    setInitialValues({ ...value.getApartment });
  };

  const { loading } = useQuery(ApartmentQuery.GET_APARTMENT, {
    variables: { id },
    onCompleted: setFormikInitialValue,
    fetchPolicy: 'cache-and-network',
  });

  const [updateApartment] = useMutation(ApartmentMutation.UPDATE_APARTMENT, {
    onError: (err) => {
      addToast(err.graphQLErrors[0].message, { appearance: 'error' });
    },
    onCompleted: () => {
      formik.setSubmitting(false);
      addToast('Apartamento atualizado', { appearance: 'success' });
      history.push('/apartment');
    },
  });
  const history = useHistory();

  if (loading) return 'Loading apartment';

  return (
    <React.Fragment>
      <Container>
        <div>
          <h1>Editar Apartamento</h1>
        </div>
        {!loading && <ApartmentForm formik={formik} />}
      </Container>
    </React.Fragment>
  );
}
