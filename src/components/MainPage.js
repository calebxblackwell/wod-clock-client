import React, { Component } from 'react';
import {connect} from 'react-redux'
import Chrono from './chrono.js'
import './chrono.css'
import './MainPage.css'
import { fetchPrograms } from '../reducers/program.js'

class MainPage extends Component  {
    constructor(props){
      super(props);
      this.state= {

      }
    }
    componentDidMount() {
        this.props.dispatch(fetchPrograms())
  }

render() {
  return(
    <div className="MainPage">
      <h2>Main Page</h2>
      <Chrono  />
      <p className="GymProgram">
          WOD: {this.props.GymProgram}
      </p>
    </div>
    )
  }
};
//mapStateToProps specifies which part of the state we want to provide to component
const mapStateToProps = (state) => {
    return {GymProgram: state.GymProgram};

}
export default connect(mapStateToProps)(MainPage);
