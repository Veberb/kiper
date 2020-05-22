import React from 'react';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { ResidentMutation } from '../../services/apollo';
import ResidentForm from '../../components/Resident/ResidentForm';
import { ResidentSchema } from '../../validation/';
import useBreadcrumb from '../../utils/hooks/useBreadcrumb';

export default function CreateResident() {
  const history = useHistory();
  const { addToast } = useToasts();
  useBreadcrumb([
    {
      title: 'Apartamentos',
      to: '/apartment',
    },
    { title: 'Cadastro' },
  ]);

  const [createResident] = useMutation(ResidentMutation.CREATE_RESIDENT, {
    onError: (err) => {
      addToast(err.graphQLErrors[0].message, { appearance: 'error' });
    },
    onCompleted: () => {
      addToast('Morador cadastrado!', { appearance: 'success' });
      formik.setSubmitting(false);
      history.goBack();
    },
  });

  const formik = useFormik({
    validationSchema: ResidentSchema,
    initialValues: {
      name: '',
      birth: '',
      phone: '',
      cpf: '',
      email: '',
      responsible: 'false',
      apartment: '',
    },

    onSubmit: async (values) => {
      await createResident({ variables: { resident: values } });
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
