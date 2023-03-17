import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Signup from "./Signup";
import "./styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { loginStatus } from "./store/slices/loginSlice";

function App() {
  const dispatch = useDispatch();
  const [user, setuser] = useState([]);

  const userlogin = useSelector((state) => {
    return state.login;
  });

  //console.log(userlogin.loginstatus.status);
  // const [loginstatus, setloginstatus] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("email")) {
      dispatch(loginStatus(true));
    }
  }, []);

  return (
    <div className="myleft">
      <BrowserRouter >
        <spam><Routes>
          {userlogin.loginstatus.status && (
            <>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="*" element={<Home />}></Route>
            </>
          )}
          {!userlogin.loginstatus.status && (
            <>
              <Route path="/Login" element={<Login loginuser={user} />}></Route>
              <Route
                path="/signup"
                element={<Signup getter={setuser} />}
              ></Route>
              <Route path="*" element={<Login loginuser={user} />}></Route>
            </>
          )}

          {/* {!loginstatus.state &&(<>
          <Route path="/Login" element={<Login loginuser={user}  />}></Route>
          <Route path="/signup" element={<Signup getter={setuser} />}></Route>
          <Route path='*' element={<Login loginuser={user} />}></Route>
        </>) */}
        </Routes></spam>
      </BrowserRouter>
    </div>
  );
}

export default App;
