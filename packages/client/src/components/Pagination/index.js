import React, { useState, useEffect } from 'react';

import { Pagination } from 'react-bootstrap';

export default function PaginationComponent({ setPagination, pagination }) {
  const [paginationItens, setPaginationItens] = useState([]);

  useEffect(() => {
    const totalPages = Math.ceil(pagination.totalCount / pagination.limit);
    const items = Array(totalPages)
      .fill(1)
      .map((value, index) => {
        return (
          <Pagination.Item
            key={index}
            active={index + 1 === pagination.offset}
            onClick={() => {
              setPagination({ ...pagination, offset: index + 1 });
            }}
          >
            {index + 1}
          </Pagination.Item>
        );
      });
    setPaginationItens(items);
  }, [pagination, pagination.currentPage, pagination.limit, pagination.offset, pagination.totalCount, setPagination]);

  return (
    <React.Fragment>
      <Pagination>{paginationItens}</Pagination>
    </React.Fragment>
  );
}
