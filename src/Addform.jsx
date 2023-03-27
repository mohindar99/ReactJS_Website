import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import "./styles/Addform.css"
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import axios from "axios";
import BasicAlerts from "./Alert";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Addform() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const API = "https://jsonplaceholder.typicode.com";

  const [values, setvalues] = useState({
    title: "",
    url:"",
  });

  const postApiData = async (url) => {
    try {
      const res = await axios.post(url, {title:values.title,url:values.url});
      if (res.data.title) {
        alert(`The data had been added to the id ${res.data.id} title : ${res.data.title} url: ${res.data.url}`);
       }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAdd = () => { 
    postApiData(`${API}/photos`);
    setOpen(false);
  }

  const inputevent = (event) => { 
    let { name, value } = event.target;
    setvalues((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }

  return (
    <div>
        <AddBoxRoundedIcon onClick={handleOpen} sx={{ fontSize: 35, color:"orange" }}/>
      <Modal
        open={open}   
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='main'>
            Enter the values you want to Add :
          </Typography>
          <h2 className="title">Enter Title :</h2>
          <input type="text" name="title" onChange={inputevent} className="boxes" placeholder="Enter valid title"  />
          <h2 className='url'>Enter URL :</h2>
          <input type="text" name="url" onChange={inputevent} className="boxes" placeholder="Enter valid URL" />
          <br/>
          <button onClick={handleAdd} className="add">Add</button>      
          <button onClick={handleClose} className="close">Close</button>  
        </Box>
      </Modal>
      
    </div>
  );
}