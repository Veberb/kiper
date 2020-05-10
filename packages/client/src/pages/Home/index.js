import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Container, Table } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

import SearchBar from '../../components/searchBar';
import { ApartmentQuery, ApartmentMutation } from '../../services/apollo';
import './index.css';

export default function Home() {
  const [searchName, setSearchName] = useState('');
  const { loading, error, data } = useQuery(ApartmentQuery.GET_APARTMENTS, { variables: { name: searchName } });

  const [deleteApartment] = useMutation(ApartmentMutation.DELETE_APARTMENT, {
    refetchQueries: [{ query: ApartmentQuery.GET_APARTMENTS }],
  });

  if (loading) return 'Loading apartments';

  const removeApartment = async ({ _id, name }) => {
    await deleteApartment({ variables: { _id: _id } });
  };

  const onSearchValue = (value) => {
    setSearchName(value);
  };

  return (
    <React.Fragment>
      <Container>
        <SearchBar searchValue={onSearchValue} />
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
                    <div onClick={() => removeApartment(apartment)}>
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
