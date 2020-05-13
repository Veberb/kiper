import React, { useState, use } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Container, Table } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

import SearchBar from '../../components/searchBar';
import Modal from '../../components/modal/';
import DeleteApartmentModal from '../../components/modal/Apartment/DeleteApartmentModal';
import { ApartmentQuery, ApartmentMutation } from '../../services/apollo';
import './index.css';

export default function Home() {
  const [searchName, setSearchName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentApartment, setCurrentApartment] = useState('');

  const { loading, error, data } = useQuery(ApartmentQuery.GET_APARTMENTS, { variables: { name: searchName } });

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
        <Modal show={showModal} title="Atenção" onHide={() => setShowModal(false)} onClick={removeApartment}>
          <DeleteApartmentModal />
        </Modal>
        <SearchBar searchValue={setSearchName} searchName={searchName} />
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
                    <div>
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
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}
