import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';
import ListResident from '../../components/Resident/ListResident';

import { ResidentQuery } from '../../services/apollo';

export default function ApartmentResident() {
  const [searchName, setSearchName] = useState('');
  const { id } = useParams();
  const history = useHistory();

  const { loading, data } = useQuery(ResidentQuery.LIST_RESIDENTS, {
    variables: { name: searchName, apartmentId: id },
  });

  if (loading) return 'Loading Residents';
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={9}>
            <SearchBar searchValue={setSearchName} searchName={searchName} />
          </Col>
          <Col sm={2}>
            <Button onClick={() => history.push(`/apartment/${id}/resident/create`)}>Cadastrar</Button>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>{!loading && !data.listResidents.length && <div> Nenhum morador encontrado </div>}</Col>
          <Col sm={12}>
            {!loading && data.listResidents.length > 0 && <ListResident listResidents={data.listResidents} />}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
