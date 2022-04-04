import React from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import "./login.scss";
import useToken from "../../Hooks/UseToken";

function Login() {
  const [setToken] = useToken(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = evt.target.elements;

    fetch("https://reqres.in/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim()
      })
    }).then(response=>response.json()).then(data=>setToken(data))
    
  };
  return (
    <div className="login">
      <div className="login__inner">
        <form className="login__form" onSubmit={handleSubmit}>
          <h3 className="login__heading">Log In</h3>
          <TextField
            className="login__input--email"
            variant="outlined"
            name="email"
            type="email"
            placeholder="email..."
            value={"eve.holt@reqres.in"}
          />
          <TextField
            className="login__input--password"
            variant="outlined"
            name="password"
            type="password"
            placeholder="**********"
            value={"cityslicka"}
          />
          <Button className="login__btn" variant="contained" type="submit">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
