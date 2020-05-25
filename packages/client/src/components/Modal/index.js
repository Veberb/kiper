import React from 'react';

import { Modal, Button } from 'react-bootstrap';

const ModalComponent = ({ title, show, onHide, onClick, children, cancel = 'Cancelar', submit = 'Submit' }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            {cancel}
          </Button>
          <Button variant="primary" onClick={onClick}>
            {submit}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
