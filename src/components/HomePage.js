import React from 'react';
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return(
    <div className="HomePage">
      <h2>WOD CLOCK</h2>
      <h2>Home Page</h2>
      <form name="form">
      <Link to="/register">
        <button className="home-button">Register</button>
      </Link>

      <Link to="/login">
        <button className="home-button2">Login</button>
      </Link>
      </form>
    </div>
  )
}
export default HomePage
