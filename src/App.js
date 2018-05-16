import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Router, Route } from 'react-router-dom';

import { history } from './helpers/history';
import { alertActions } from './actions/alert.actions';
import { PrivateRoute } from './components/PrivateRoute';
import { LoginForm } from './components/loginscreen.js';
import Chrono from './components/chrono.js'
import './App.css';
import { fetchPrograms } from './actions/index.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      isVisible: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    const { dispatch } = this.props;
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });

  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isVisible: false
    }, function() {
      console.log(this.state.isVisible)
    });
    return false;
  }

componentDidMount() {
  this.props.dispatch(fetchPrograms())
}

  render() {
    
    const {alert} = this.props;
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">WOD CLOCK</h1>
        </header>
        <div className="LoginScreen">
          <h2> Welcome to WOD Clock! This is an app designed to make your Crossfit
          workouts easier by providing your workout of the day information right
          next to the stopwatch clock. No more white boards and watching the wall
          clock for you!Please feel free to login to your gym's Wodify below or
          use testuser and testpassword if you don't have a Crossfit Gym.
          </h2>
          <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={App} />
                                <Route path="/login" component={LoginForm} />
                            </div>
                        </Router>
                    </div>
                </div>
        </div>

        <LoginForm />

//------the area below this line should only display if you're logged in. -------
        <p className="App-workout">
            WOD: {this.props.workout}
        </p>
        <Chrono  />
      </div>
    );
  }//closing bracket for render
} //closing bracket for component

//mapStateToProps specifies which part of the state we want to provide to component
const mapStateToProps = (state) => ({
  workout: state.program.workout,
  alert: state.alert
})

export default connect(mapStateToProps)(App);
