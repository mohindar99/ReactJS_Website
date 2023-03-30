import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    API: "https://aptilliobe.clixlogix.org/v1/api/user/login",
    Token:"",
}
const loginApi = createSlice({
    name: "loginAPI",
    initialState,
    reducers: {
        addToken(state, action) { 
            state.Token=action.payload
        }
    }
});

export { loginApi };
    
export const { addToken } = loginApi.actions;
