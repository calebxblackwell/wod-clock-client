import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/auth';
import './loginscreen.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
      }

      handleSubmit(event) {
        event.preventDefault();
                const username = event.target.username.value
                const password = event.target.password.value
                this.props.dispatch(loginUser(username, password));
      }

      render() {

          return (
              <div className="mainLogin">
                  <h2>Login</h2>
                  <p>Welcome to WOD Clock! This is an app designed to make your
                      Crossfit workouts easier by providing your workout of the
                      day information right next to the stopwatch clock. No more
                      white boards and watching the wall clock for you! Please
                      feel free to use testuser and testpassword if you dont 
                      have a Crossfit Gym.</p>

                  <form className="form" onSubmit={this.handleSubmit}>
                      <div>
                          <label htmlFor="username">Username</label>
                           <input type="text" className="form-control" name="username" required />
                      </div>
                      <div>
                          <label htmlFor="password">Password</label>
                         <input type="password" className="form-control" name="password" required />

                      </div>
                      <div>
                          <button className="button">Login</button>

                          <Link to="/register" className="cancel-button">Cancel</Link>
                      </div>
                  </form>
              </div>
          );
      }
  }

  const connectedLoginPage = connect()(LoginForm);
  export { connectedLoginPage as LoginForm };
