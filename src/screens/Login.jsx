import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Button from "@mui/material/Button";
import { useDispatch , useSelector } from "react-redux";
import { loginStatus } from "../store/slices/loginSlice";
import sign from "../assets/sign.jpg";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "axios";
import { addToken } from "../store/slices/loginApi"


const Login = () => {
  const dispatch = useDispatch();

  const API = useSelector((state) => { 
    return state.loginAPI.API;
  })

  // const token = useSelector((state) => { 
  //   return state.loginAPI.refreshToken;
  // })

  const navigate = useNavigate();
  const [apiData, setApiData] = useState("");
  const [cookies, setCookie , removeCookie] = useCookies(['user']);
  const [error, seterror] = useState("");

  const [passData, setPassData] = useState({
    "email": "",
    "password":""
  });
  
  const getApiData = async (url) => {
    try {
      const res = await axios.post(url,passData);
      setApiData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const clickhandler1 = () => {
    if (passData.email && passData.password) {
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

  const inputEvent = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPassData((pre) => {
      return {
        ...pre,
        [name]:value,
      }
    })
  };
  
  const setcookie = (e) => { 
    // if (cookies.emailID && cookies.passID) {
    //   removeCookie('emailID',{ path: 'http://127.0.0.1:5173/login' });
    //   removeCookie('passID', { path: 'http://127.0.0.1:5173/login' })
    // }else {
    //   setCookie('emailID', email, { path: 'http://127.0.0.1:5173/login' });
    //   setCookie('passID', password, { path: 'http://127.0.0.1:5173/login' });
    // }
    if (e.target.checked) {
      setCookie('emailID', email, { path: 'http://127.0.0.1:5173/login'});
      setCookie('passID', password, { path: 'http://127.0.0.1:5173/login'});
    } else { 
      removeCookie('emailID',{ path: 'http://127.0.0.1:5173/login'});
      removeCookie('passID', { path: 'http://127.0.0.1:5173/login'})
    }
  }
  
  useEffect(() => {
    if (cookies.emailID && cookies.passID) { 
      setPassData({
        "email":cookies.emailID,
        "password":cookies.passID
      })
    }
    getApiData(API);
  }, [passData.email,passData.password]);
  

  return (
    <div>
      <form onSubmit={clickhandler1}>
      <img src={sign} className="photo2" />
      <div className="outer">
        <h1 className="signin">SignIn </h1>
        <h3 className="error">{error}</h3>
        <h4 className="email">Email Address</h4>
        <input
          type="email"
          name="email"
          className="inputbox"
          placeholder="Enter a valid Email address"
          Value={cookies.emailID}
          onChange={inputEvent}
        /> 
          <h4 className="pass">Password</h4>
          <input
            type="password"
            name="password"
            className="inputbox1"
            placeholder="Enter Password"
            Value={cookies.passID}
            onChange={inputEvent}
        />
        <div className="check">
          <input type="checkbox" onChange={setcookie} value="remember"  />
          <spam className="spam4">Remember me</spam>
          <spam className="spam5">Forgot Password?</spam>
          </div>

        <Button type="submit" variant="contained" color="success" >
          Login
        </Button>
        <p className="reg1">
          Don't have an account ?
          <Link to="/signup" className="under1">
            <spam className="reg">Register</spam>
          </Link>
        </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
