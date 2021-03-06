import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { userActions } from '../actions/user.actions';
import { registerUser } from '../actions/auth';
import './registerscreen.css'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props); 
          this.handleSubmit = this.handleSubmit.bind(this)   
    }
 
    handleSubmit(event) {
        event.preventDefault();
        const username = event.target.username.value
        const password = event.target.password.value
        this.props.dispatch(registerUser(username, password));
    }
 
    render() {
        
        return (
            <div className="mainRegister">
                <h2>Register</h2>
                <p> Welcome to WOD Clock! This is an app designed to make your Crossfit
                 workouts easier by providing your workout of the day information right
                 next to the stopwatch clock. No more white boards and watching the wall
                 clock for you! Please feel free to use</p> <p className="p2">testuser and testpassword</p> <p> if you dont have a Crossfit Gym.
                 </p>
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
                        <button className="button">Register</button>
                        
                        <Link to="/login" className="cancel-button">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}
 

 
const connectedRegisterPage = connect()(RegisterPage);
export { connectedRegisterPage as RegisterPage };
