import React from 'react';
import { Link } from 'react-router-dom'


const HomePage = () => {
  return(
    <div>
      <h1>WOD CLOCK Home Page</h1>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  )
}
export default HomePage
