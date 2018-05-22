import React, { Component } from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { history } from './helpers/history';
import { alertActions } from './actions/alert.actions';
import { PrivateRoute } from './components/PrivateRoute';
import { LoginForm } from './components/loginscreen.js';
import { RegisterPage } from './components/registerscreen.js';
import  HomePage  from './components/HomePage.js';
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
        <Router >
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginForm} />

            </div>
        </Router>
    );
  }//closing bracket for render
} //closing bracket for component

//mapStateToProps specifies which part of the state we want to provide to component
const mapStateToProps = (state) => ({
  workout: state.program.workout,
  alert: state.alert
})

export default connect(mapStateToProps)(App);
