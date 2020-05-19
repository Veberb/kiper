import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import { UserMutation } from '../../services/apollo';
import UserForm from '../../components/User/UserForm';
import SpinnerButton from '../../components/Button';
import { UserSchema } from '../../validation/';

export default function RegisterUser() {
  const history = useHistory();

  const [registerUser] = useMutation(UserMutation.CREATE_USER, {
    onError: () => {
      console.log('erro ;)');
    },
    onCompleted: () => {
      formik.setSubmitting(false);
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
