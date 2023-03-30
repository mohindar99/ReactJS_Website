import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Lookup.css";
import NavBar from "./NavBar";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import LongMenu from "./LongMenu";
import Addform from "./Addform";
import PaginationRounded from "./Pagination";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import SearchDrawer from "./SearchDrawer";
import {useSelector } from "react-redux";

const Lookup = () => {
  const [page, setPage] = useState(1);
  const [totalPage, settotalPage] = useState(1);
  const [apiListData, setApiListData] = useState([]);
  const [details, setdetails] = useState(false);
  // const [filtered, setfiltered] = useState(apiData);

  const [error, setIsError] = useState("");
  const API = useSelector((state) => {
    return state.ListingAPI.fetchUrl;
  });

  const getApiData = async (url) => {
    let token = localStorage.getItem("token");
    try {
      const res = await axios.get(url,{headers:{"Authorization":`Bearer ${token}`}});
      settotalPage(res.data.data.meta.totalPages);
      setApiListData(res.data.data.listingData);
      setdetails(false);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData(API);
    console.log(details);
  }, [page,details]);

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

  return (
    <div className="all">
      <NavBar />
      <div>
      <div className="mymain">
        <div className="arrange">
          <NotificationsRoundedIcon className="bell" />
          <ArrowDropDownRoundedIcon
            className="arrow"
            sx={{ fontSize: "30px" }}
          />
        </div>
        <hr className="line" />
        <div className="showing">
          <h2 className="tablename">Table</h2>
            <p className="spacing" ><Addform /></p>
            <Button variant="contained" className="search"><SearchIcon /><SearchDrawer click={setdetails} /></Button>
          </div>
          
        <p className="data">
          It is a long established fact that a reader will be distracted by the
          readable content of a apage when looking at its layout . thepeople of
          usingLorem Ipsum is that it has a more-or-less normal distribution of
          letters, as a opposed to using 'Content here',content here,making it
          look like readable English
          </p>
        <table style={{width:985}}>
          <tr>
            <th style={{width:45}}><input type="checkbox"/></th>
            <th style={{width:440,textAlign:"center"}}>ID</th>
            <th style={{width:500,textAlign:"center"}}>Firstname</th>
              <th style={{ width: 460 }}>Lastname</th>
              <th style={{width:460}}>Email</th>
            <th style={{width:50}}></th>
          </tr>
        </table>
          {apiListData.map((photos) => {
            const { _id, firstname, lastname, email } = photos;
            return (
              <div key={_id} className="insider">
                <table style={{width:985}}>
                  <tr>
                    <td style={{width:40}}><input type="checkbox"/></td>
                    <td style={{width:410}}>{_id}</td>
                    <td style={{width:410}}>{firstname}</td>
                    <td style={{ width: 370 }}>{lastname}</td>
                    <td style={{width:370}}>{email}</td>
                    <td style={{ width: 50 }}><LongMenu id={_id}/></td>
                  </tr>
                </table>
              </div>
            );
          
        })}
      </div>
        <div className=".pag"><PaginationRounded page={setPage} totalPages={totalPage} /></div>
      </div>
    </div>
  );
};
export default Lookup;
