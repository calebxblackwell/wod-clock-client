import React, { Component } from 'react'

class ProgramContainer extends Component  {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <ul>
          {this.props.GymProgram ?
            this.props.GymProgram.map(
              program => <ProgramContainer props={program.id}/>) : ''
            }
        </ul>
      </div>
    )
  }
}
export default ProgramContainer
