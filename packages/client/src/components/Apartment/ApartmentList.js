import React from 'react';

import { Table } from 'react-bootstrap';
import { PencilSquare, Trash, People } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';

const ListResident = ({ listApartments = [], setShowModal, setCurrentApartment }) => {
  const history = useHistory();

  return (
    <>
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
          {listApartments.map((apartment, index) => (
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
    </>
  );
};

export default ListResident;
