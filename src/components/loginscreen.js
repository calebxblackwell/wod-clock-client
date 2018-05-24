import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { userActions } from '../actions/user.actions';
//renders a login form with username and password fields.
import { loginUser } from '../actions/auth';

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
                {  //<h2>Login</h2>
                  // <h3> "Welcome to WOD Clock! This is an app designed to make your Crossfit
                  // workouts easier by providing your workout of the day information right
                  // next to the stopwatch clock. No more white boards and watching the wall
                  // clock for you! Please feel free to use testuser and testpassword if you don't have a Crossfit Gym."
                  // </h3>
                }
                  <form name="form" onSubmit={this.handleSubmit}>
                      <div className={'form-group' }>
                          <label htmlFor="username">Username</label>
                           <input type="text" className="form-control" name="username" required />

                      </div>
                      <div className={'form-group' }>
                          <label htmlFor="password">Password</label>
                         <input type="password" className="form-control" name="password" required />

                      </div>
                      <div className="form-group">
                          <button className="btn btn-primary">Login</button>

                      </div>
                  </form>
              </div>
          );
      }
  }

  const connectedLoginPage = connect()(LoginForm);
  export { connectedLoginPage as LoginForm };
