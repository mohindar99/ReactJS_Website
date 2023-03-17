import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Home.css";
import Home_2 from "./Home_2";
import NavBar from "./NavBar";
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

const Home = () => {
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
  const remove = (id) => {
    console.log("deleted the index of", { id });
    //setvalue(value - 1);
    console.log("deleted");
    setApiData((old) => {
      return old.filter((arrelement, index) => {
        return index + 1 !== id;
      });
    });
  };

  const removeAll = () => {
    setvalue(0);
  };

  return (
    <div className="all">   
      <NavBar/>
      <div className="mymain">
        <div className="arrange">
        <NotificationsRoundedIcon className="bell" />
          <ArrowDropDownRoundedIcon className="arrow" sx={{ fontSize: "30px" }} />
          </div>
        <hr className="line"/>
        <h2>Table</h2>
        <h1>You are in the Home page of Photos </h1>
        <button onClick={add}> Add Tables</button>
        <button onClick={removeAll}> Remove All</button>
        <table>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>URL</td>
          </tr>
        </table>
        {apiData.map((photos) => {
          const { id, title, url } = photos;
          if (id <= value) {
            return (
              <div key={id} className="insider">
                <table>
                  <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{url}</td>
                  </tr>
                </table>
                <Home_2 id={id} onClick={remove} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Home;
