import React, { useState, useEffect } from 'react';

import { Table } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

const ListResident = ({ listResidents = [] }) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Responsável</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {listResidents.map((resident, index) => (
            <tr key={index}>
              {Object.keys(resident).map((key, keyIndex) => {
                if (!keyIndex) return <td key={keyIndex}>{index + 1}</td>;
                return <td key={keyIndex}>{resident[key]}</td>;
              })}
              <td className="actions">
                <div onClick={() => {}}>
                  <PencilSquare />
                </div>
                <div onClick={() => {}}>
                  <Trash />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      ;
    </>
  );
};

export default ListResident;
