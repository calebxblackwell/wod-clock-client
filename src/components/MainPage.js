import React from 'react';
import {connect} from 'react-redux'
//import { Link } from 'react-router-dom'
import Chrono from './chrono.js'
//import { fetchPrograms } from '../actions/index.js'
//import { RECIEVE_WORKOUT } from '../actions/index.js'

const MainPage = (props) => {
  return(
    <div>
      <h1>Main Page</h1>
      <p className="App-workout">
          WOD: {props.workout}
      </p>

      <Chrono  />
    </div>
  )
}

const mapStateToProps = (state) => ({
  workout: state.program.workout,
  alert: state.alert
})

export default connect(mapStateToProps)(MainPage);
