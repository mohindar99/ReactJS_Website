import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux";
import store from "./store/index";
import "./styles/index.css"
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById('root')).render(
  <CookiesProvider>
  <Provider store={store}>
    <App />
    </Provider>
  </CookiesProvider>,
)
