import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import "./styles/Signup.css";
import sign from "./assets/final_login.jpg";
import Button from "@mui/material/Button";
import InputIcon from "@mui/icons-material/Input";

const Signup = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const clickhandler = () => {
    if (validator.isEmail(email)) {
      const data = { name, email, password };
      if (name && email && password) {
        let allUsers = [...users, data];
        setusers(allUsers);
        setname("");
        setemail("");
        setpassword("");
      }
    } else {
      setemail("");
      seterror("please enter valid email");
    }
  };
  // useEffect(() => {
  //   if (users) {
  //     props.getter(users);
  //   }
  // }, [users]);

  const emailhandler = (e) => {
    setemail(e.target.value);
  };
  return (
    <div>
      <div>
        <img className="photo" src={sign} />
      </div>
      <div className="maindiv1">
        <h1>SignUp</h1>
        <h3 className="sim1">Enter Username</h3>
        <div>
          <input
            className="input1"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <h3 className="sim2">Email address</h3>
        <div>
          <input
            className="input1"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={emailhandler}
          />
        </div>

        <h1>{error}</h1>
        <h3 className="sim3">Password</h3>
        <div>
          <input
            className="input1"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
      
        <br />
        <div className="submit">
          <Button variant="contained" onClick={clickhandler}>
            Submit
          </Button>
        </div>
        <br/>
        <Link to="/login" className="under">
          <Button variant="contained" endIcon={<InputIcon/>}>
            Back to Login
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Signup;
