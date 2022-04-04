import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Provider as AuthenticationProvider} from './Context/Authentication'
import {Provider as PhotosProvider} from './Context/Photos';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthenticationProvider>
    <PhotosProvider>
      <App />
      </PhotosProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
