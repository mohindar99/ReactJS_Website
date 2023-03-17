import React, { useState, useEffect } from "react";
import "./styles/About.css";
import axios from "axios";
import NavBar from "./NavBar";
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';

const About = () => {
  const [mydata, setmydata] = useState([]);
  const [num, setnum] = useState(1);
  const [error, seterror] = useState("");
  const API = "https://jsonplaceholder.typicode.com/users";

  const getApi = async (url) => {
    try {
      const res = await axios.get(url);
      setmydata(res.data);
    } catch (error) {
      seterror(error.message);
    }
  };
  useEffect(() => {
    getApi(API);
  }, []);

  const adder = () => {
    setnum(num + 1);
  };
  const delete2 = () => {
    setnum(num - 1);
  };
  const removeall = () => {
    setnum(0);
  };

  return (
    <div className="over">
        <NavBar />
      <div className="contentdiv">
        <h1>You are in the About User Details page </h1>
        <button onClick={adder}>Add Details</button>
        <button onClick={delete2}>Delete Details</button>
        <button onClick={removeall}>Remove All</button>
        <table>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>username</td>
            <td>Email</td>
          </tr>
        </table>
        {mydata.map((user) => {
          const { id, name, username, email } = user;
          if (id <= num) {
            return (
              <div key={id}>
                <table>
                  <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{email}</td>
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
export default About;
