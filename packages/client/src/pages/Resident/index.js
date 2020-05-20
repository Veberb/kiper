import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';
import ListResident from '../../components/Resident/ListResident';

import { ResidentQuery, ResidentMutation } from '../../services/apollo';

export default function ApartmentResident() {
  const [searchName, setSearchName] = useState('');
  const [responsible, setResponsible] = useState('');
  const { id } = useParams();
  const history = useHistory();

  const { loading, data } = useQuery(ResidentQuery.LIST_RESIDENTS, {
    variables: { name: searchName, apartmentId: id, responsible },
    fetchPolicy: 'cache-and-network',
  });

  const [deleteResident] = useMutation(ResidentMutation.DELETE_RESIDENT, {
    refetchQueries: [
      { query: ResidentQuery.LIST_RESIDENTS, variables: { name: searchName, apartmentId: id, responsible } },
    ],
  });

  const removeResident = async ({ _id }) => {
    await deleteResident({ variables: { id: _id } });
  };

  if (loading) return 'Carregando moradores';
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={5}>
            <SearchBar searchValue={setSearchName} searchName={searchName} />
          </Col>
          <Col sm={4}>
            <Form.Control
              as="select"
              value={responsible}
              onChange={(event) => {
                console.log(event.target.value);
                setResponsible(event.target.value);
              }}
            >
              <option value={''}>Selecionar responsável</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Form.Control>
          </Col>
          <Col sm={2}>
            <Button onClick={() => history.push(`/resident/create`)}>Cadastrar</Button>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>{!loading && !data.listResidents.length && <div> Nenhum morador encontrado </div>}</Col>
          <Col sm={12}>
            {!loading && data.listResidents.length > 0 && (
              <ListResident listResidents={data.listResidents} remove={removeResident} />
            )}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
