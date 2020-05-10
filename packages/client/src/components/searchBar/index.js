import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

import useDebounce from '../../utils/hooks/debounce';

function SearchBar({ searchValue }) {
  const [value, setValue] = useState('');

  const debouncedSearchValue = useDebounce(value, 2500);

  useEffect(() => {
    if (debouncedSearchValue) searchValue(value);
  }, [debouncedSearchValue, searchValue, value]);

  return (
    <Form.Group>
      <Form.Control
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </Form.Group>
  );
}

export default SearchBar;
