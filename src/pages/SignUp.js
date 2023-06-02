import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const unameHandler = (event) => {
    setUname(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;

      const user = users.find(
        (user) => user.uname === uname && user.pass === password
      );

      if (user) {
        alert("Login successful");
        navigate("../");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
    }

    setUname("");
    setPassword("");
  };

  return (
    <div className="container">
      <form onSubmit={loginHandler}>
        <h1>Login</h1>
        <div className="input-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            name="uname"
            value={uname}
            onChange={unameHandler}
            required
          />
        </div>
        <div className="input-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={passwordHandler}
            required
          />
        </div>
        <button type="submit">Login</button>
        <Link to="../register" className="new-user">
          <p>new user? Create Account</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
