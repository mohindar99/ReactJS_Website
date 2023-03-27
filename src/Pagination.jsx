import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded(props) {

    const handleChange = (page) => { 
        props.setPage(page);
    }

    const inputChange = (e) => { 
        handleChange(e.target.textContent);
    }

  return (
    <Stack>
          <Pagination count={1000} variant="outlined" onChange={inputChange} className="pag" shape="rounded" />
    </Stack>
  );
}