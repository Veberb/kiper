import React from 'react';
import { Form } from 'react-bootstrap';

const UserForm = ({ formik }) => {
  return (
    <>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
          isInvalid={!!formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
          isInvalid={!!formik.errors.password}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
export default UserForm;
