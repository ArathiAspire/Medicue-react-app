import React, { useState } from "react";
import "./SignUp.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
    const navigate=useNavigate()
  const [inputs, setInputs] = useState({
    uname: "",
    email: "",
    pass: "",
    cpass: "",
  });
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleRegister = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:3000/users", inputs);
        console.log(response.data); 
        alert("Registration Successfull")
        navigate('../signup')

      } catch (error) {
        console.error(error);
      
      }
  };

  return (
    <div className="container">
      <form onSubmit={handleRegister}>
        <h1>Registration</h1>
        <div class="input-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            name="uname"
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="input-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="input-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="pass"
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="input-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="cpass"
            onChange={inputChangeHandler}
            required
          />
        </div>
        <button type="submit">Register</button>
        <Link className="new-user" to="../signup">
          allready have an account?Sign in.
        </Link>
      </form>
    </div>
  );
};

export default Registration;
