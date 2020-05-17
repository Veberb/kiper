import React from 'react';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';

import { ResidentMutation } from '../../services/apollo';
import ResidentForm from '../../components/Resident/ResidentForm';
import { ResidentSchema } from '../../validation/';

export default function CreateResident() {
  const { id } = useParams();
  const [createResident] = useMutation(ResidentMutation.CREATE_RESIDENT);
  const history = useHistory();

  const formik = useFormik({
    validationSchema: ResidentSchema,
    initialValues: {
      name: 'Lucas',
      birth: '',
      phone: '4899640897',
      cpf: '09152508960',
      email: 'lucas@conpas.il.com',
      responsible: false,
      apartment: '',
    },

    onSubmit: async (values) => {
      values.apartment = id;
      await createResident({ variables: { resident: values } });
      history.push(`/apartment/${id}/resident/`);
    },
  });

  return (
    <React.Fragment>
      <Container>
        <div>
          <h1>Cadastrar Morador</h1>
        </div>
        <ResidentForm formik={formik} />
      </Container>
    </React.Fragment>
  );
}
