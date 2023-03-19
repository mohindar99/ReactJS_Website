import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Lookup.css";
import NavBar from "./NavBar";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import LongMenu from "./Lookupmenu";

const Lookup = () => {
  const [apiData, setApiData] = useState([]);
  // const [filtered, setfiltered] = useState(apiData);
  const [value, setvalue] = useState(3);
  const [error, setIsError] = useState("");
  const API = "https://jsonplaceholder.typicode.com";

  const getApiData = async (url) => {
    try {
      const res = await axios.get(url);
      setApiData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData(`${API}/photos`);
  }, []);

  const add = () => {
    setvalue(value + 1);
  };
  // const remove = (id) => {
  //   console.log("deleted the index of", { id });
  //   //setvalue(value - 1);
  //   console.log("deleted");
  //   setApiData((old) => {
  //     return old.filter((arrelement, index) => {
  //       return index + 1 !== id;
  //     });
  //   });
  // };

  const removeAll = () => {
    setvalue(0);
  };

  return (
    <div className="all">
      <NavBar />
      <div className="mymain">
        <div className="arrange">
          <NotificationsRoundedIcon className="bell" />
          <ArrowDropDownRoundedIcon
            className="arrow"
            sx={{ fontSize: "30px" }}
          />
        </div>
        <hr className="line" />
        <h2 className="tablename">Table <AddBoxRoundedIcon className="adding" sx={{fontSize:35}} /></h2>
        <p className="data">
          It is a long established fact that a reader will be distracted by the
          readable content of a apage when looking at its layout . thepeople of
          usingLorem Ipsum is that it has a more-or-less normal distribution of
          letters, as a opposed to using 'Content here',content here,making it
          look like readable English
        </p>
        <button onClick={add}> Add Tables</button>
        <button onClick={removeAll}> Remove All</button>
        <table style={{width:985}}>
          <tr>
            <th style={{width:45}}><input type="checkbox"/></th>
            <th style={{width:45}}>ID</th>
            <th style={{width:500}}>Title</th>
            <th style={{width:460}}>URL</th>
            <th style={{width:50}}></th>
          </tr>
        </table>
        {apiData.map((photos) => {
          const { id, title, url } = photos;
          if (id <= value) {
            return (
              <div key={id} className="insider">
                <table style={{width:985}}>
                  <tr>
                    <td style={{width:40}}><input type="checkbox"/></td>
                    <td style={{width:40}}>{id}</td>
                    <td style={{width:410}}>{title}</td>
                    <td style={{width:370}}>{url}</td>
                    <td style={{width:50}}><LongMenu/></td>
                  </tr>
                </table>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Lookup;
