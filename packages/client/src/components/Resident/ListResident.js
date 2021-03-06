import React from 'react';

import { Table } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';

const ListResident = ({ listResidents = [], remove }) => {
  const history = useHistory();

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Responsável</th>
            <th>Apartmento</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {listResidents.map((resident, index) => (
            <tr key={index}>
              {Object.keys(resident).map((key, keyIndex) => {
                if (!keyIndex) return <td key={keyIndex}>{index + 1}</td>;
                return <td key={keyIndex}>{resident[key].toString()}</td>;
              })}
              <td className="actions">
                <div
                  onClick={() => {
                    history.push(`/resident/${resident._id}`);
                  }}
                >
                  <PencilSquare />
                </div>
                <div
                  onClick={() => {
                    remove(resident);
                  }}
                >
                  <Trash />
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
