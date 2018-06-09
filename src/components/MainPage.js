import React, { Component } from 'react';
import {connect} from 'react-redux'
import Chrono from './chrono.js'
import './chrono.css'
import './MainPage.css'
import { Link } from 'react-router-dom'
//import {fetchPrograms} from '../actions/program.js'
import ProgramContainer from './ProgramContainer.js'
//componentDidMount(){this.props.dispatch(fetchPrograms())}
class MainPage extends Component  {
    constructor(props){
      super(props);
      this.state= {

      }
    }


render() {

  return(
    <div className="MainPage">
      <h2>3...2...1...GO!</h2>
      <Chrono  />
      <ProgramContainer />
      <p>Please see notes in program.js for more info about api functionality.</p>
      <Link to="/login">
        <button className="home-button3">Log Out</button>
      </Link>
    </div>
    )
  }
};

export default connect()(MainPage);
