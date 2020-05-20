import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { UserMutation } from '../../services/apollo';
import UserForm from '../../components/User/UserForm';
import SpinnerButton from '../../components/Button';
import { UserSchema } from '../../validation/';

export default function RegisterUser() {
  const history = useHistory();
  const { addToast } = useToasts();

  const [registerUser] = useMutation(UserMutation.CREATE_USER, {
    onError: (err) => {
      addToast(err.graphQLErrors[0].message, { appearance: 'error' });
    },
    onCompleted: (val) => {
      formik.setSubmitting(false);
      addToast('Usuário cadastrado!', { appearance: 'success' });
      history.push('/');
    },
  });

  const formik = useFormik({
    validationSchema: UserSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await registerUser({ variables: { user: values } });
    },
  });

  return (
    <React.Fragment>
      <Container>
        <div>
          <h1>Registrar Usuário</h1>
        </div>
        <Form onSubmit={formik.handleSubmit}>
          <UserForm formik={formik} />
          <SpinnerButton isSubmitting={formik.isSubmitting} />
        </Form>
      </Container>
    </React.Fragment>
  );
}
