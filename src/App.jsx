import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Lookup from "./screens/Lookup";
import Signup from "./screens/Signup";
import "./styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { loginStatus } from "./store/slices/loginSlice";

function App() {
  const dispatch = useDispatch();
  const userlogin = useSelector((state) => {
    return state.login;
  });

  //console.log(userlogin.loginstatus.status);
  // const [loginstatus, setloginstatus] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(loginStatus(true));
    }
  }, []);

  return (
    <div className="myleft">
      <BrowserRouter >
        <spam><Routes>
          {userlogin.loginstatus.status && (
            <>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/lookup" element={<Lookup />}></Route>
              <Route path="*" element={<Dashboard />}></Route>
            </>
          )}
          {!userlogin.loginstatus.status && (
            <>
              <Route path="/Login" element={<Login/>}></Route>
              <Route
                path="/signup"
                element={<Signup/>}
              ></Route>
              <Route path="*" element={<Login />}></Route>
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
