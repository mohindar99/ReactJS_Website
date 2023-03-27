import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState,useEffect } from "react";
import "./styles/Form1.css"
import axios from "axios";

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

export default function Form1(props) {
  const [open, setOpen] = useState(false);
  const API = "https://jsonplaceholder.typicode.com";

  const handleOpen = () => { 
    setOpen(true);
  }

  const handleClose = () => { 
    setOpen(false);
  }

  const { id } = props;
  
  const [inside, setinside] = useState({
    title:"",
    url:"",
  })

  const [values, setvalues] = useState({
    title:"",
    url:"",
  });

  const putApiData = async (url) => {
    try {
      const res = await axios.put(url,{title:values.title,url:values.url});
      if (res.data.title) { 
        alert(`The edited parameters are id:${res.data.id} title:${res.data.title} url:${res.data.url}`);
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = () => { 
    putApiData(`${API}/photos/${id}`);
    setOpen(false);
  }

  const inputevent = (event) => { 
    let { name, value} = event.target;
    setvalues((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }

  const getApiData = async (url) => {
    try {
      const res = await axios.get(url);
      setinside({
        title: res.data.title,
        url: res.data.url
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getApiData(`${API}/photos/${id}`);
  },[inside.title,inside.url]);


  return (
    <div>
      <Button onClick={handleOpen}>{props.name}</Button>
      <Modal
        open={open}   
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='main'>
            Enter the values you want to edit :
          </Typography>
          <h2 className="title">Enter Title :</h2>
          <input type="text" name="title" defaultValue={inside.title} onChange={inputevent} className="boxes" placeholder="Enter valid title"  />
          <h2 className='url'>Enter URL :</h2>
          <input type="text" name="url" defaultValue={inside.url} onChange={inputevent} className="boxes" placeholder="Enter valid URL"  />
          <br/>
          <button onClick={handleEdit} className="edit">{props.name}</button>      
          <button onClick={handleClose} className="close">Close</button>  
        </Box>
      </Modal>
    </div>
  );
}