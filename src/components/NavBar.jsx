import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginStatus } from "../store/slices/loginSlice";
import "../styles/NavBar.css";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const NavBar = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    left: false,
  });
  const currentstatus = useSelector((state) => {
    return state.login;
  });
  const [login, setlogin] = useState("Login");

  const clickhandler = () => {
    if (login == "Logout") {
      localStorage.clear();
      setlogin("Login");
      //props.setStatus(false);
      dispatch(loginStatus(false));
    }
  };
  useEffect(() => {
    if (currentstatus.loginstatus.status) {
      setlogin("Logout");
    }
  });

  return (
    <div>
      {currentstatus.loginstatus.status ? (
        <div className="outside">
          <h1 className="logo">LOGO</h1>
          <hr />
          <ul className="bor">
            <li className="space1">
              <DashboardCustomizeRoundedIcon
                className="dash"
                sx={{ fontSize: "15px", marginTop: 1 }}
              />
              <Link to="/dashboard" className="under1">
                <spam className="idea"> Dashboard</spam>
              </Link>
            </li>

            <li className="space">
              <DnsRoundedIcon
                className="dash"
                sx={{ fontSize: "15px", marginTop: 1 }}
              />
              <Link to="/lookup" className="under">
                Lookup Table
              </Link>
            </li>
          </ul>
          <hr />
          <ul className="bor">
            <li className="space">
              <LogoutRoundedIcon
                className="dash"
                sx={{ fontSize: "15px", marginTop: 1 }}
              />
              <Link to="/login" className="under" onClick={clickhandler}>
                {login}
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/lookup">About</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            {" "}
            <Link to="/login" onClick={clickhandler}>
              {login}
            </Link>
          </li>
        </div>
      )}
    </div>
  );
};
export default NavBar;
