import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices/loginSlice";
import { listDataApi } from "./slices/listDataApi";
import { loginApi } from "./slices/loginApi";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    ListingAPI: listDataApi.reducer,
    loginAPI:loginApi.reducer,
  },
});

export default store;
