import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetchUrl: `https://aptilliobe.clixlogix.org/v1/api/hiringManagers/list/6346bd278d2658f7671da576?userId=6346bd278d2658f7671da576&limit=6&page=1&firstname=&lastname=&email=`,
    currentPage: 1,
    changeFirstName:"",
    changeLastName:"",
    changeEmail: "",
    previousFirstName: "",
    previousLastName: "",
    previousEmail:""
}

const listDataApi = createSlice({
    name: "ListingAPI",
    initialState,
    reducers: {
        addTotalChange(state, action) {
            let fetch = state.fetchUrl;
            let updatedurl1 = fetch.replace(`&firstname=${state.previousFirstName}`,`&firstname=${state.changeFirstName}`);
            let updatedurl2 = updatedurl1.replace(`&lastname=${state.previousLastName}`,`&lastname=${state.changeLastName}`);
            let updatedurl3 = updatedurl2.replace(`&email=${state.previousEmail}`, `&email=${state.changeEmail}`);
            state.fetchUrl = updatedurl3;
            console.log(updatedurl3);
            state.previousFirstName=state.changeFirstName;
            state.previousLastName=state.changeLastName;
            state.previousEmail = state.changeEmail;
        },
        
        addPage(state, action) {
            let fetch = state.fetchUrl;
            let mainUrl = fetch.replace(`&page=${state.currentPage}`,action.payload);
            state.fetchUrl = mainUrl;
        },
        
        addCurrentPage(state, action) { 
            state.currentPage = action.payload; 
        },
        addCurrentFirstname(state, action) { 
            state.changeFirstName = action.payload;
        },
        addCurrentLastname(state, action) { 
            state.changeLastName = action.payload;
        },
        addCurrentEmail(state, action) { 
            state.changeEmail = action.payload;
        }
    }
});
    
export { listDataApi };

export const { addTotalChange, addPage,addCurrentPage,addCurrentFirstname,addCurrentLastname,addCurrentEmail} = listDataApi.actions;