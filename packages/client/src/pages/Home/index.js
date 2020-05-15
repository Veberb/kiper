import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Container, Table, Row, Col, Button } from 'react-bootstrap';
import { PencilSquare, Trash, People } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';
import Modal from '../../components/Modal';
import DeleteApartmentModal from '../../components/Modal/Apartment/DeleteApartmentModal';
import { ApartmentQuery, ApartmentMutation } from '../../services/apollo';
import './index.css';

export default function Home() {
  const [searchName, setSearchName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentApartment, setCurrentApartment] = useState('');
  const history = useHistory();

  const { loading, data } = useQuery(ApartmentQuery.GET_APARTMENTS, { variables: { name: searchName } });
  const [deleteApartment] = useMutation(ApartmentMutation.DELETE_APARTMENT, {
    refetchQueries: [{ query: ApartmentQuery.GET_APARTMENTS, variables: { name: searchName } }],
  });

  const removeApartment = async () => {
    await deleteApartment({ variables: { _id: currentApartment._id } });
    setShowModal(false);
  };

  if (loading) return 'Loading apartments';

  return (
    <React.Fragment>
      <Container>
        <Modal
          show={showModal}
          title="Atenção"
          submit="Excluir"
          onHide={() => setShowModal(false)}
          onClick={removeApartment}
        >
          <DeleteApartmentModal />
        </Modal>
        <Row>
          <Col sm={9}>
            <SearchBar searchValue={setSearchName} searchName={searchName} />
          </Col>

          <Col sm={2}>
            <Button onClick={() => history.push('/apartment')}>Cadastrar</Button>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Número</th>
                  <th>Bloco</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {!loading &&
                  data.getApartments.map((apartment, index) => (
                    <tr key={index}>
                      {Object.keys(apartment).map((key, keyIndex) => {
                        if (!keyIndex) return <td key={keyIndex}>{index + 1}</td>;
                        return <td key={keyIndex}>{apartment[key]}</td>;
                      })}
                      <td className="actions">
                        <div
                          onClick={() => {
                            history.push(`/apartment/${apartment._id}`);
                          }}
                        >
                          <PencilSquare />
                        </div>
                        <div
                          onClick={() => {
                            setShowModal(true);
                            setCurrentApartment(apartment);
                          }}
                        >
                          <Trash />
                        </div>
                        <div
                          onClick={() => {
                            history.push(`/apartment/${apartment._id}/resident`);
                          }}
                        >
                          <People />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
