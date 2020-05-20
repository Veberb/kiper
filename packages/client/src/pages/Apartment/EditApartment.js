import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';

import { CreateApartmentSchema } from '../../validation';
import { ApartmentMutation, ApartmentQuery } from '../../services/apollo';
import ApartmentForm from '../../components/Apartment/ApartmentForm';

export default function Apartment() {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({ name: '', block: '', number: 0 });

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: CreateApartmentSchema,
    onSubmit: async (values) => {
      await updateApartment({ variables: { apartment: values, id } });
      formik.setSubmitting(false);
      history.push('/apartment');
    },
  });

  const setFormikInitialValue = (value) => {
    setInitialValues({ ...value.getApartment });
  };

  const { loading } = useQuery(ApartmentQuery.GET_APARTMENT, {
    variables: { id },
    onCompleted: setFormikInitialValue,
  });

  const [updateApartment] = useMutation(ApartmentMutation.UPDATE_APARTMENT);
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
