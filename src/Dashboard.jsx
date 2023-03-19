import React, { useState } from "react";
import "./styles/Dashboard.css";

import NavBar from "./NavBar";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';

const Dashboard = () => {
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
          <ForumRoundedIcon className="icondata"/>
            <p className="paradata">26 New Messages!</p>
            <hr className="dataline" />
            <p style={{fontSize:13}}>View Details</p>
          </div>
          <div className="datadisplay2">
          <ListRoundedIcon className="icondata"/>
            <p className="paradata">11 New Tasks!</p>
            <hr className="dataline" />
            <p style={{fontSize:13}}>View Details</p>
          </div>
          <div className="datadisplay3">
          <ShoppingCartRoundedIcon className="icondata"/>
            <p className="paradata">123 New Orders!</p>
            <hr className="dataline" />
            <p style={{fontSize:13}}>View Details</p>
          </div>
          <div className="datadisplay4">
          <ConfirmationNumberRoundedIcon className="icondata"/>
            <p className="paradata">13 New Tickets!</p>
            <hr className="dataline" />
            <p style={{fontSize:13}}>View Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
