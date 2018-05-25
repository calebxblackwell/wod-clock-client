import React from 'react';
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return(
    <div className="HomePage">
      <h2>WOD CLOCK Home Page</h2>
      <form name="form">
      <Link to="/register">
        <button className="btn">Register</button>
      </Link>
      <Link to="/login">
        <button className="btn2">Login</button>
      </Link>
      </form>
    </div>
  )
}
export default HomePage
