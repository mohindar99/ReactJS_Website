import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";
import Button from "@mui/material/Button";
import { useDispatch , useSelector } from "react-redux";
import { loginStatus } from "./store/slices/loginSlice";
import sign from "./assets/sign.jpg";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "axios";
import { addToken } from "../src/store/slices/loginApi"

const Login = () => {
  const dispatch = useDispatch();

  const API = useSelector((state) => { 
    return state.loginAPI.API;
  })

  // const token = useSelector((state) => { 
  //   return state.loginAPI.refreshToken;
  // })

  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [apiData, setApiData] = useState("");
  const [cookies, setCookie , removeCookie] = useCookies(['user']);
  const [error, seterror] = useState("");

  let setpassData = {
    "email": "",
    "password":""
  };

  const getApiData = async (url) => {
    try {
      const res = await axios.post(url, setpassData);
      setApiData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const clickhandler1 = () => {
    if (email && password) {
      if (apiData.status == "success") {
        localStorage.setItem("token",apiData.token);
        dispatch(addToken(apiData.token));
        dispatch(loginStatus(true));
        seterror("");
        navigate("/Dashboard");
      }
    }
    else { 
      seterror('Enter valid email and password');
    }
  };

  useEffect(() => {
    setpassData = {
      "email": email,
      "password": password,
    };
    getApiData(API);
  }, [email, password]);
  
  const setcookie = (e) => { 
    // if (cookies.emailID && cookies.passID) {
    //   removeCookie('emailID',{ path: 'http://127.0.0.1:5173/login' });
    //   removeCookie('passID', { path: 'http://127.0.0.1:5173/login' })
    // }else {
    //   setCookie('emailID', email, { path: 'http://127.0.0.1:5173/login' });
    //   setCookie('passID', password, { path: 'http://127.0.0.1:5173/login' });
    // }
    if (e.target.checked) {
      setCookie('emailID', email, { path: 'http://127.0.0.1:5173/login' });
      setCookie('passID', password, { path: 'http://127.0.0.1:5173/login' });
    } else { 
      removeCookie('emailID',{ path: 'http://127.0.0.1:5173/login' });
      removeCookie('passID', { path: 'http://127.0.0.1:5173/login' })
    }
  }

  return (
    <div>
      <img src={sign} className="photo2" />
      <div className="outer">
        <h1 className="signin">SignIn </h1>
        <h3 className="error">{error}</h3>
        <h4 className="email">Email Address</h4>
        <input
          type="email"
          className="inputbox"
          placeholder="Enter a valid Email address"
          defaultValue={cookies.emailID}
          onChange={(e) => setemail(e.target.value)}
        /> 
          <h4 className="pass">Password</h4>
          <input
            type="password"
            className="inputbox1"
            placeholder="Enter Password"
            defaultValue={cookies.passID}
            onChange={(e) => setpassword(e.target.value)}
        />
        <div className="check">
          <input type="checkbox" onChange={setcookie} value="remember"  />
          <spam className="spam4">Remember me</spam>
          <spam className="spam5">Forgot Password?</spam>
          </div>

        <Button variant="contained" color="success" onClick={clickhandler1} >
          Login
        </Button>
        <p className="reg1">
          Don't have an account ?
          <Link to="/signup" className="under1">
            <spam className="reg">Register</spam>
          </Link>
        </p>
        
      </div>
    </div>
  );
};

export default Login;
