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

  const [signIn] = useMutation(UserMutation.SIGNIN, {
    onError: (err) => {
      console.log('erro', err);
    },
    onCompleted: (val) => {
      console.log(val);
      console.log('finish');
      formik.setSubmitting(false);
      history.push('/home');
    },
  });

  const formik = useFormik({
    validationSchema: UserSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await signIn({ variables: { user: values } });
    },
  });

  return (
    <React.Fragment>
      <Container>
        <div>
          <h1>Login</h1>
        </div>
        <Form onSubmit={formik.handleSubmit}>
          <UserForm formik={formik} />
          <SpinnerButton isSubmitting={formik.isSubmitting} />
        </Form>
      </Container>
    </React.Fragment>
  );
}
