import React from 'react';
import { Form } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { ApartmentQuery } from '../../services/apollo';

export default function ApartmentSelect({ formik }) {
  const { data } = useQuery(ApartmentQuery.GET_APARTMENTS);

  return (
    <React.Fragment>
      <Form.Control as="select" name="apartment" value={formik.values.apartment} onChange={formik.handleChange}>
        {data &&
          data.getApartments.map((apartment, index) => {
            return (
              <option value={apartment._id} key={index}>
                {apartment.name}
              </option>
            );
          })}
      </Form.Control>
    </React.Fragment>
  );
}
