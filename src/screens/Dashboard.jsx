import React from "react";
import { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import NavBar from "../components/NavBar";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";
import axios from "axios";

const Dashboard = () => {
  const API = "https://jsonplaceholder.typicode.com";
  const [postsData, setpostsData] = useState([]);
  const [commentsData, setcommentsData] = useState([]);
  const [albumsData, setalbumsData] = useState([]);
  const [photosData, setphotosData] = useState([]);
  const [file, setfile] = useState();

  const getpostsData = async (url) => {
    try {
      const res = await axios.get(url);
      setpostsData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getcommentsData = async (url) => {
    try {
      const res = await axios.get(url);
      setcommentsData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getalbumsData = async (url) => {
    try {
      const res = await axios.get(url);
      setalbumsData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getphotosData = async (url) => {
    try {
      const res = await axios.get(url);
      setphotosData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const Changing = (e) => { 
    let arr = [1, 2, 3, 4];
    console.log(arr);
    setfile(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  // uploading the file which got fetched 
  const uploaded = () => {
    const formData = new FormData();
    formData.append("file", file);
    fetch("url", {
      method: "POST",
      body : formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("success", result);
      });
  };

  useEffect(() => {
    getpostsData(`${API}/posts`);
    getcommentsData(`${API}/comments`);
    getalbumsData(`${API}/albums`);
    getphotosData(`${API}/photos`);
  }, []);

  return (
    <div className="over">
      <NavBar />
      <div className="contentdiv">
        <div className="arrange">
          <NotificationsRoundedIcon className="bell" />
          <ArrowDropDownRoundedIcon
            className="arrow"
            sx={{ fontSize: "30px" }}
          />
        </div>
        <hr className="line1" />

        <div className="mydisplay">
          <div className="datadisplay1">
            <ForumRoundedIcon className="icondata" />
            <p className="paradata">{postsData.length} New Posts!</p>
            <hr className="dataline" />
            <p style={{ fontSize: 13 }}>View Details</p>
          </div>
          <div className="datadisplay2">
            <ListRoundedIcon className="icondata" />
            <p className="paradata">{commentsData.length} New Comments!</p>
            <hr className="dataline" />
            <p style={{ fontSize: 13 }}>View Details</p>
          </div>
          <div className="datadisplay3">
            <ShoppingCartRoundedIcon className="icondata" />
            <p className="paradata">{albumsData.length} New Albums!</p>
            <hr className="dataline" />
            <p style={{ fontSize: 13 }}>View Details</p>
          </div>
          <div className="datadisplay4">
            <ConfirmationNumberRoundedIcon className="icondata" />
            <p className="paradata">{photosData.length} New Photos!</p>
            <hr className="dataline" />
            <p style={{ fontSize: 13 }}>View Details</p>
          </div>
        </div>
        <input type="file" name="file" className="fileUpload" onChange={Changing} />
        <button onClick={uploaded}>Upload</button>
      </div>
      
    </div>
  );
};
export default Dashboard;
