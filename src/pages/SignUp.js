import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container">
    <form id="loginForm">
      <h1>Login</h1>
      <div className="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" required/>
      </div>
      <div className="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" required/>
      </div>
      <button type="submit">Login</button>
      <Link to='../register' className="new-user"><p>new user? Create Account</p></Link>
    </form>
  </div>
  );
};

export default SignUp;
