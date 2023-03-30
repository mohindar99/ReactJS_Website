import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch} from 'react-redux';
import { addCurrentPage, addPage } from "../src/store/slices/listDataApi"

export default function PaginationRounded(props) {
  const dispatch = useDispatch();
  const totalPages = props.totalPages; 

  const inputChange = (e) => { 
    let page = `&page=${e.target.textContent}`;
    dispatch(addPage(page));
    dispatch(addCurrentPage(e.target.textContent));
    props.page(e.target.textContent);
  }

  return (
    <Stack>
          <Pagination count={totalPages} variant="outlined" onChange={inputChange} className="pag" shape="rounded" />
    </Stack>
  );
}