import React from "react";
import "./App.scss";
import AuthenticatedApp from "./AuthenticatedApp";

import UnauthenticatedApp from "./UnauthenticatedApp";

import useToken from "./Hooks/UseToken";



function App() {

const [token, setToken] = useToken()


  if(token){
    return <AuthenticatedApp></AuthenticatedApp>;
  }else{
    return <UnauthenticatedApp></UnauthenticatedApp>
  }
}

export default App;
