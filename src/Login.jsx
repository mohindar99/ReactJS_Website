import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { loginStatus } from "./store/slices/loginSlice";
import sign from "./assets/sign.jpg";
import { Link } from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  let allUsers = props.loginuser;
  let matchedDetails;

  const [error, seterror] = useState("");

  const clickhandler1 = () => {
    if (email && password) {
      matchedDetails = allUsers.filter((val) => {
        return val.email == email && val.password == password;
      });
      if (matchedDetails[0].email && matchedDetails[0].password) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        dispatch(loginStatus(true));
        //props.status(true);
        seterror("");
        navigate("/home");
      }
    } else {
      seterror("enter user details");
    }
  };

  return (
    <div>
      <img src={sign} className="photo2" />
      <div className="outer">
        <h1 className="signin">SignIn </h1>
        <h4 className="email">Email Address</h4>
        <input
          type="email"
          className="inputbox"
          placeholder="Enter a valid Email address"
          onChange={(e) => setemail(e.target.value)}
        /> 
          <h4 className="pass">Password</h4>
          <input
            type="password"
            className="inputbox1"
            placeholder="Enter Password"
            onChange={(e) => setpassword(e.target.value)}
        />
        <div className="check">
          <input type="checkbox" />
          <spam className="spam4">Remember me</spam>
          <spam className="spam5">Forgot Password?</spam>
          </div>

        <Button variant="contained" color="success" onClick={clickhandler1}>
          Login
        </Button>
        <p className="reg1">
          Don't have an account ?
          <Link to="/signup" className="under1">
            <spam className="reg">Register</spam>
          </Link>
        </p>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default Login;
