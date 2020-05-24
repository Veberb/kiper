import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';
import Modal from '../../components/Modal';
import DeleteApartmentModal from '../../components/Modal/Apartment/DeleteApartmentModal';
import ApartmentList from '../../components/Apartment/ApartmentList';
import Pagination from '../../components/Pagination';
import { ApartmentQuery, ApartmentMutation } from '../../services/apollo';
import useBreadcrumb from '../../utils/hooks/useBreadcrumb';

import './index.css';

export default function Home() {
  const [searchName, setSearchName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentApartment, setCurrentApartment] = useState('');
  const history = useHistory();
  const [pagination, setPagination] = useState({ offset: 1, limit: 2, totalCount: 0 });

  useBreadcrumb([
    {
      title: 'Apartamentos',
    },
  ]);

  const { loading, data } = useQuery(ApartmentQuery.LIST_APARTMENTS, {
    variables: { name: searchName, ...pagination },
    fetchPolicy: 'cache-and-network',
    onCompleted: ({ listApartments }) => {
      setPagination({ ...pagination, totalCount: listApartments.totalApartment });
    },
  });
  const [deleteApartment] = useMutation(ApartmentMutation.DELETE_APARTMENT, {
    refetchQueries: [{ query: ApartmentQuery.LIST_APARTMENTS, variables: { name: searchName, ...pagination } }],
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

          <Col sm={3}>
            <Button className="buttonSize" onClick={() => history.push('/apartment/create')}>
              Cadastrar
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            {!loading && !data.listApartments.apartments.length && <div> Nenhum apartamento encontrado</div>}
          </Col>
          <Col sm={12}>
            {!loading && data.listApartments.apartments.length > 0 && (
              <ApartmentList
                listApartments={data.listApartments.apartments}
                setShowModal={setShowModal}
                setCurrentApartment={setCurrentApartment}
              />
            )}
          </Col>
        </Row>
        <Row className="centerPagination">
          <Pagination setPagination={setPagination} pagination={pagination} />
        </Row>
      </Container>
    </React.Fragment>
  );
}
