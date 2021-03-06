import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUserTime } from '../actions/chrono';
//these are the event listeners for the stopwatch click functions
//they update the state when given an action.
const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)


class Chrono extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      laps: [],
      lastClearedIncrementer: null
    };
    this.incrementer = null;
  }

  handleStartClick() {
    this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
  }

  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      laps: []
    });
  }

  handleLapClick() {
    const newLaps = [...this.state.laps, this.state.secondsElapsed]
    this.setState({
      ...this.state,
      laps: newLaps
    })
    this.props.dispatch(saveUserTime(this.state.secondsElapsed))

  }

  render() {

    return (
      <div className="Chrono">
        <h1 className="Chrono-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>

        {(this.state.secondsElapsed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button className="start-btn" onClick={this.handleStartClick.bind(this)}>start</Button>
          : <Button className="stop-btn" onClick={this.handleStopClick.bind(this)}>stop</Button>
        )}

        {(this.state.secondsElapsed !== 0 &&
          this.incrementer !== this.state.lastClearedIncrementer
          ? <Button onClick={this.handleLapClick.bind(this)}>lap</Button>
          : null
        )}


        {(this.state.secondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button onClick={this.handleResetClick.bind(this)}>reset</Button>
          : null
        )}

        <ul className="Chrono-laps">
        <h3>Lap Times</h3>
          { this.state.laps.map((lap, index) =>
              <li className="Chrono-lap"key={ index }><strong>{index + 1}</strong>/ {formattedSeconds(lap)}</li>)
          }
        </ul>
      </div>
    );
  }
}
const Button = (props) =>
  <button type="button" {...props} className={"button " + props.className } />;

export default connect()(Chrono);
