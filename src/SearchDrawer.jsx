import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import "./styles/Search.css"
import { useState ,useEffect} from "react";
import { useDispatch , useSelector } from "react-redux";
import { addTotalChange, addCurrentFirstname, addCurrentLastname , addCurrentEmail} from "../src/store/slices/listDataApi";

export default function SearchDrawer(props) {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({ right: false, });
  
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Email, setEmail] = useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const Search = () => {
    dispatch(addTotalChange());
    props.click(true);

    //   props.click(true);
    // } else if (lastName &&firstName==false&&Email==false) {
    //   let lname = `&lastname=${lastName}`;
    //   dispatch(addLastname(lname));
    //   dispatch(addCurrentLastname(lastName));
    //   dispatch(addCurrentEmail(""));
    //   dispatch(addCurrentFirstname(""));
    //   props.click(true);
    // } else { 
    //   let email = `&email=${Email}`;
    //   dispatch(addEmail(email));
    //   dispatch(addCurrentEmail(Email));
    //   dispatch(addCurrentFirstname(""));
    //   dispatch(addCurrentLastname(""));
    //   props.click(true);
    // }
  };

  useEffect(() => {
    dispatch(addCurrentFirstname(firstName));
    dispatch(addCurrentLastname(lastName));
    dispatch(addCurrentEmail(Email));

  }, [firstName, lastName, Email]);


  const list = (anchor) => (
    <Box
          sx={{ width: 350}}
          role="presentation"
          onClick={toggleDrawer(anchor, true)}
    >
      <List>
        <div className="filterout">
          <h1 className="mypara1">Filter/Search</h1>
          <p className="mypara">Filter By First Name</p>
          <input type="text" className="textinput1" value={firstName} placeholder="enter first name" onChange={(e) =>{setfirstName(e.target.value) } } />
          <p className="mypara">Filter By Last Name</p>
          <input type="text" className="textinput2" value={lastName} onChange={(e) => {setlastName(e.target.value) }} placeholder="enter last name" />
          <p className="mypara">Filter By Email</p>
          <input type="text" className="textinput3" value={Email} onChange={(e) => {setEmail(e.target.value) }} placeholder="enter email" />
          <br />
          <Button variant="contained" sx={{ marginTop: "20px" }} onClick={Search}>Filter</Button>
        </div>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{ color: "white" }}>
            search
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
