import React from 'react';
import { Form } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { ApartmentQuery } from '../../services/apollo';

export default function ApartmentSelect({ formik }) {
  const { data } = useQuery(ApartmentQuery.LIST_APARTMENTS);

  return (
    <React.Fragment>
      <Form.Control
        as="select"
        value={formik.values.apartment}
        onChange={formik.handleChange}
        name="apartment"
        isInvalid={!!formik.errors.apartment}
      >
        <option value={''} key={'default'}>
          Selecionar Apartamento
        </option>
        {data &&
          data.listApartments.map((apartment, index) => {
            return (
              <option value={apartment._id} key={index}>
                {apartment.name}
              </option>
            );
          })}
      </Form.Control>
      <Form.Control.Feedback type="invalid">{formik.errors.apartment}</Form.Control.Feedback>
    </React.Fragment>
  );
}
