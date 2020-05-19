import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const SpinnerButton = ({ isSubmitting, buttonName = 'Submit' }) => {
  return (
    <>
      <Button variant="primary" type="submit" disabled={isSubmitting}>
        {isSubmitting && <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />}
        {buttonName}
      </Button>
    </>
  );
};
export default SpinnerButton;
