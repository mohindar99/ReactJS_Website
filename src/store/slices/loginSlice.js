import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginstatus:{
    status:false
  }
} 

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginStatus(state, action){
     // console.log(action.payload);
      state.loginstatus.status=action.payload;
    }
  },
});

export { loginSlice };

export const { loginStatus } = loginSlice.actions;
