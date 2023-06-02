import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div className="container">
    <form id="registrationForm">
      <h1>Registration</h1>
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" required/>
      </div>
      <div className="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" required/>
      </div>
      <div className="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" required/>
      </div>
      <div className="input-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" required/>
      </div>
      <button type="submit">Register</button>
      <Link className='new-user' to='../signup'>allready have an account?Sign in.</Link>
    </form>
  </div>
  )
}

export default Registration
