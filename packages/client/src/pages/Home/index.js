import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Container, Table } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

import { ApartmentQuery } from '../../services/apollo';
import './index.css';

export default function Home() {
  const { loading, error, data } = useQuery(ApartmentQuery.GET_APARTMENTS);
  console.log(data);
  if (loading) return 'Loading apartments';
  return (
    <React.Fragment>
      <Container>
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
                    <PencilSquare />
                    <Trash />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}
